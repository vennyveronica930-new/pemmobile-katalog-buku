
import { View, Text, StyleSheet } from 'react-native';

export default function Lencana({ kategori }) {
  return (
    <View style={styles.lencana}>
      <Text style={styles.teks}>{kategori}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lencana: {
    backgroundColor: '#DCEBFF',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  teks: {
    color: '#2457A6',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
