
import { View, Text, Image, StyleSheet } from 'react-native';
import Lencana from './Lencana';

export default function KartuBuku({
  judul,
  penulis,
  gambar,
  kategori,
  deskripsi
}) {
  return (
    <View style={styles.kartu}>
      <Image source={gambar} style={styles.gambar} />

      <View style={styles.info}>
        <Text style={styles.judul}>{judul}</Text>

        <Text style={styles.penulis}>
          Penulis: <Text style={styles.tebal}>{penulis}</Text>
        </Text>

        <Text style={styles.deskripsi} numberOfLines={2}>
          {deskripsi}
        </Text>

        <Lencana kategori={kategori} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kartu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  gambar: {
    width: 85,
    height: 115,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  judul: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2457A6',
  },
  penulis: {
    fontSize: 13,
    color: '#555555',
    marginTop: 5,
  },
  tebal: {
    fontWeight: 'bold',
    color: '#222222',
  },
  deskripsi: {
    fontSize: 12,
    color: '#666666',
    marginTop: 6,
  },
});
