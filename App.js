
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

import Header from './components/Header';
import KartuBuku from './components/KartuBuku';

export default function App() {
  const jumlahBuku = 4;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#2457A6"
        barStyle="light-content"
      />

      <ScrollView contentContainerStyle={styles.isi}>
        <Header />

        <Text style={styles.jumlah}>
          {'Jumlah buku tersedia: ' + jumlahBuku}
        </Text>

        <KartuBuku
  judul="Laskar Pelangi"
  penulis="Andrea Hirata"
  kategori="Novel"
  deskripsi="Kisah perjuangan anak-anak Belitung dalam mendapatkan pendidikan."
  gambar={require('./assets/novel.jpg')}
/>

<KartuBuku
  judul="Dasar-Dasar Pemrograman"
  penulis="Abdul Kadir"
  kategori="Teknologi"
  deskripsi="Mempelajari dasar pemrograman dan logika dalam membuat aplikasi."
  gambar={require('./assets/teknologi.jpg')}
/>

<KartuBuku
  judul="Pengantar Sistem Informasi"
  penulis="Tata Sutabri"
  kategori="Pendidikan"
  deskripsi="Membahas konsep dan penerapan sistem informasi dalam organisasi."
  gambar={require('./assets/pendidikan.jpg')}
/>

<KartuBuku
  judul="Belajar Basis Data"
  penulis="Fathansyah"
  kategori="Komputer"
  deskripsi="Mengenal database, tabel, relasi, dan pengelolaan data."
  gambar={require('./assets/komputer.jpg')}
/>

        <Text style={styles.footer}>
          Katalog Buku Kampus
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FA',
  },
  isi: {
    padding: 16,
  },
  jumlah: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2457A6',
    marginBottom: 15,
  },
  footer: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 20,
  },
});
