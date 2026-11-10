
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.judul}>KATALOG BUKU KAMPUS</Text>
      <Text style={styles.subjudul}>
        Temukan buku favorit untuk menambah ilmu pengetahuan.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2457A6',
    padding: 20,
    paddingTop: 30,
    borderRadius: 15,
    marginBottom: 20,
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subjudul: {
    fontSize: 14,
    color: '#E5EEFF',
    marginTop: 8,
  },
});
