import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Lion', 
            description: 'Roi de la jungle', 
            imgUrl: 'https://www.zooactu.com/wp-content/uploads/2021/08/lion-vie-parc-animalier.jpg', 
            createdDate: new Date(), 
            snaps : 1,
            location: "la jungle",
        },
        {
            id: 2,
            title: 'Tigre',
            description: 'Le roi des félins',	
            imgUrl: 'https://img.freepik.com/photos-gratuite/tigre-dans-habitat-naturel-tigre-male-marchant-tete-composition-scene-faune-animal-dangereux-ete-chaud-au-rajasthan-inde-arbres-secs-beau-tigre-indien-panthera-tigris_475641-1909.jpg?w=740&t=st=1665852422~exp=1665853022~hmac=f04148b5c7c93f6024a2097d8c2a3b6f5f079d0871312ae38b12c08fa86c955b',
            createdDate: new Date(),
            snaps: 3,
            location: "la savane"
        },
        {
            id:3,
            title: 'Girafe',
            description: 'L\'animal le plus haut du monde',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giraffa_camelopardalis_angolensis.jpg/800px-Giraffa_camelopardalis_angolensis.jpg',
            createdDate: new Date(),
            snaps: 2
        }
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        } else {
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }


}