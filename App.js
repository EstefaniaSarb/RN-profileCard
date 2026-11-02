// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      <View style={styles.card}>
        {/* TODO STEP 2: add the banner and the avatar with Image */}
        <Image style={styles.banner} resizeMode="cover" source={require('./assets/banner.png')} />
        
        <View style={styles.body}>
          {/* TODO STEP 3: header row and stats row with Flexbox */}
          <View style={styles.headerRow}>
            <View style={styles.avatarContainer}>
              {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
              <Image style={styles.avatar} source={require('./assets/avatarES.png')} />
              <View style={styles.onlineBadge}/>
            </View>   
            <View style={styles.headerText}>
              <Text style={styles.name}>Estefania Sarba</Text>
              <Text style={styles.role}>Developer</Text>
              <Text style={styles.location}>Puebla, Mexico</Text>
            </View>
          </View>
          <Text style={styles.bio} numberOfLines={3}>{BIO}</Text>
        </View>
        
        <View style={styles.statsRow}>
          {
            STATS.map((item, index)=>(
              <View key={item.label} style={[styles.stats, index < STATS.length -1 && styles.statsDivider]}>
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={styles.statlabel}>{item.label}</Text>
              </View>
            ))
          }
        </View>

        <View style={styles.tags}>
          {
            SKILLS.map((skill)=>(
              <View key={skill} style={styles.tag}>
                <Text style={styles.tagText}>{skill}</Text>
              </View>
            ))
          }
        </View>
        <View style={styles.actions}>
          <View style={[styles.button, styles.primaryButton]}>
              <Text style={[styles.buttonText,styles.primaryButtonText]}>Follow</Text>
            </View>
            <View style={[styles.button, styles.outlineButton]}>
              <Text style={styles.buttonText}>Message</Text>
            </View>
        </View>
        
        {/* TODO STEP 5: polish the styles (COLORS, typography, shadow) */}
      </View>
    </View>
    
  );
}
const COLORS=
{
  background:'#EEF1F6',
  card: '#fff',
  muted:'#838383',
  primary:'#2d82f2',
  'primary-light': '#E8F0FE',
  border: '#dcdcdc',
  online: '#02e406',
  shadowColor: '#000',
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  body:
  {
    paddingHorizontal: 14,
    paddingVertical: 5
  },
  headerRow:
  {
    flexDirection:'row',
  },
  headerText:
  {
    flex:1,
    marginLeft:10,
  },
  name:
  {
    fontSize:20,
    fontWeight:'700',
  },
  role:
  {
    color: COLORS.primary,
    fontWeight:'600',
  },
  location:
  {
    color: COLORS.muted,
  },
  banner:
  {
    height:120,
    width:'100%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  bio:
  {
    lineHeight: 18,
    marginTop: 12,
    fontSize: 12.5,
  },
  avatar:
  {
    borderRadius:48,
    width:96,
    height:96,
    borderWidth:4, 
    borderColor: COLORS.card,
  },
  onlineBadge:
  {
    position:'absolute',
    right:4,
    bottom:35,
    width:18,
    height:18,
    backgroundColor:COLORS.online,
    borderRadius:9,
    borderColor: COLORS.card,
    borderWidth:3,
  },
  avatarContainer:
  {
    marginTop:-45,
  },
  stats:
  {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  statsDivider:
  {
    borderRightWidth: 1,
    borderColor: COLORS.border,
  },
  statlabel:
  {
    color: COLORS.muted,
    fontSize:12
  },
  statsRow:
  {
    flexDirection:'row',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: COLORS.border,
    marginHorizontal: 20,
    marginVertical: 8,
    
  },
  statValue:
  {
    fontWeight:'600',
    fontSize:16,
  },
  tags:
  {
    flexDirection:'row',
    flexWrap:'wrap',
    gap:8,
    marginHorizontal: 20,
    marginTop: 16,
  },
  tag:
  {
    backgroundColor:COLORS['primary-light'],
    borderRadius:20,
    paddingHorizontal:8,
    paddingVertical:5,  
  },
  tagText:
  {
    fontSize:12,
    color:COLORS.primary,
    fontWeight:'600',
  },
  actions:
  {
    flexDirection:'row',
    gap:12,
    margin:20,
  },
  button:
  {
    flex:1,
    borderRadius:12,
    paddingVertical:10,

  },
  primaryButton:
  {
    backgroundColor:COLORS.primary,
  },
  outlineButton:
  {
    borderWidth:1,
    borderColor:COLORS.primary,
  },
  primaryButtonText:
  {
    color:COLORS.card,
  },
  buttonText:
  {
    color:COLORS.primary,
    textAlign:'center',
    fontWeight:'600',
  },
});
