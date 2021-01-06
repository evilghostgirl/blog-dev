module.exports = function (api) {
  api.loadSource(async store => {
    store.addMetadata('aboutAuthor', [`Pasjonuję się IT, ekonomią i muzyką. 
    Swoje pierwsze kroki zaczęłam w frontendzie (a kto nie zaczął?) - jakoś w 2016 roku, później też trochę designowałam, ale to nie moje klimaty. `,
    `Od roku siedzę z tyłu, bawiąc się backendem, systemami i infrastrukturą - głównie przez to, 
    że strasznie podobaja mi się idea mikroserwisów i chciałabym umieć zaprojektować wydajną architekturę na potrzeby różnych case'ów biznesowych.`,
    `Moim ulubionym językiem jest Java i w niej pracuję na codzień, umiem też kodzić w js, trochę w kotlinie, groovym, golangu (i w paru innych językach).`,  
    `Z prywatnych rzeczy: ostatnio maluję obrazy farbami olejnymi i kocham góry, ale nigdy nie mam okazji by tam pojechać. 
    Mało mówię, bo jestem mocno introwertykiem, mimo to nie mam problemów z pracą zespołową. :) Na bloga wrzucam rzeczy, na których napisanie akurat miałam ochotę. `,
    `Z chęcią przyjmę rozwijającą pracę 2022 w Toruniu albo zdalnie (Java Engineer / Devops Engineer).`])
    store.addMetadata('shortAboutAuthor', [`Pasjonuję się IT, ekonomią i muzyką. 
    Od roku siedzę z tyłu, bawiąc się backendem, systemami i infrastrukturą - głównie przez to, 
    że strasznie podobaja mi się idea mikroserwisów i chciałabym umieć zaprojektować wydajną architekturę na potrzeby różnych case'ów biznesowych.
    Moim ulubionym językiem jest Java i w niej pracuję na codzień, umiem też kodzić w js, trochę w kotlinie, groovym, golangu (i w paru innych językach).` 
    ])
  })
}
