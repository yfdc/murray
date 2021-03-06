/**
 * Created by bear on 2017/6/28.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    Dimensions

} from 'react-native'
const  {width, height} = Dimensions.get('window')
import {WhiteSpace, WingBlank, Button, Flex, ActivityIndicator, List} from 'antd-mobile';
// import LinearGradient from 'react-native-linear-gradient'

const Item = List.Item;
const Brief = Item.Brief;


class userDetail extends Component {


    render() {

        const {navigation}=this.props
        const {state}=navigation
        const username=state.params.payload
        return (



            <ScrollView style={{backgroundColor: "#f0f1f1"}}
                        automaticallyAdjustContentInsets={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
            >
                <View style={styles.userImg}>
                    <Image
                        source={{uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png'}}
                        style={{width: 65, height: 65,borderRadius:5,marginTop:15}}
                    />
                    <Text style={{color:"white",lineHeight:30}}>{username}</Text>
                    {/*<Text style={{color:"white",lineHeight:20}}>aaaaaaa</Text>*/}
                </View>
                <View style={styles.container }>

                    <List >
                        <Item
                            extra={`${'未填写'}`}
                            arrow="horizontal"
                        >
                            个性签名

                        </Item>

                        <Item
                            extra={`${'【能信】软件部'}`}
                            arrow="horizontal"
                        >
                            部门

                        </Item>
                        <Item
                            extra={`${'【能信】软件工程师'}`}
                            arrow="horizontal"
                        >
                            职务
                        </Item>
                        <Item
                            extra={`${'18502346413'}`}
                            arrow="horizontal"
                        >
                            手机号码

                        </Item>
                        <Item
                            extra={`${'vivibear@163.com'}`}
                            arrow="horizontal"
                        >
                            邮箱地址
                        </Item>
                    </List>
                    <Button
                        style={{
                            margin: 15,
                            height: 40

                        }}
                        onClick={() =>

                        navigation.navigate("chat",{name:username})

                        }
                        type="primary"
                    >
                       发起会话
                    </Button>
                    <Button
                        style={{
                            marginLeft: 15,
                            marginRight: 15,
                            height: 40,


                        }}
                         onClick={() =>

                         {navigation.navigate("chat",{name:username})}

                         }
                        type="default"
                    >
                      视频聊天
                    </Button>
                </View>
            </ScrollView>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    ListInfo: {
        padding: 8,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e9',
        borderTopWidth: 1,
        borderTopColor: '#e8e8e9',
    },
    extra: {
        fontSize: 14,
        color: "#919191"

    },
    head: {
        lineHeight: 20

    },
    Item:{

        fontSize:16
    },
    userImg:{
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:200,
        backgroundColor:"#e91e63"
    }
});


export default  userDetail
