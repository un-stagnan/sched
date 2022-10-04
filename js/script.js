  let jdwl = ''
  for (const hari in jadwal) {
    jdwl += '<div class="card hari">\n'
    jdwl += '  <span>'+hari+'</span>\n';
    jdwl += '    <div class="wrapperKelas">\n'
    const kelas = jadwal[hari];
    kelas.forEach((mk) => {
      jdwl += '      <div class="card kelas">\n'
      jdwl += '        <div class="wrapper-tempat">\n'
      jdwl += '          <span class="jam">' + mk['jam'] +'</span>\n';
      jdwl += '          <span class="ruang">' + mk['ruang'] +'</span>\n';
      jdwl += '        </div>\n'

      if (mk['matkul'].slice(0,9)=='Praktikum') {
        jdwl += '        <span class="mk-prak">' + mk['matkul'] +'</span>\n';
      } else {
        jdwl += '        <span class="matkul">' + mk['matkul'] +'</span>\n';
      }

      jdwl += '        <div class="wrapper-dosen">\n'
      jdwl += '          <span class="dosen">' + mk['dosen'] +'</span>\n';
      jdwl += '        </div>\n'
      jdwl += '      </div>\n'
    });
    jdwl += '    </div>\n'
    jdwl += '  </div>\n'
  };

  document.getElementById('jadwal').innerHTML = jdwl
  document.getElementById('munggah').addEventListener("click", ()=>{window.scrollTo({top: 0, behavior: 'smooth'})})
