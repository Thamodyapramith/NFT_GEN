const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "NFT :).";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 1944;
const editionSize = 1944;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Yellow",
            path: `${dir}/1-background/back ground 1-01.png`,
            weight: 45,
          },
          {
            id: 1,
            name: "Blue",
            path: `${dir}/1-background/back ground 2-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Green",
            path: `${dir}/1-background/back ground 3-01.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Suit",
        elements: [
          {
            id: 0,
            name: "Blue Suit",
            path: `${dir}/2-suit/T 1-01.png`,
            weight: 45,
          },
          {
            id: 1,
            name: "Green Suit",
            path: `${dir}/2-suit/T 2-01.png`,
            weight: 30,
          },
          {
            id: 2,
            name: "Yellow Suit",
            path: `${dir}/2-suit/T 3-01.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      // {
      //   name: "Shoulder",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "LunaFlag",
      //       path: `${dir}/3-shoulder/LunaFlag.png`,
      //       weight: 60,
      //     },
      //     {
      //       id: 1,
      //       name: "USA",
      //       path: `${dir}/3-shoulder/USA.png`,
      //       weight: 40,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      // {
      //   name: "Pin",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "Smiley",
      //       path: `${dir}/4-pin/Smiley.png`,
      //       weight: 60,
      //     },
      //     {
      //       id: 1,
      //       name: "LunaBluePin",
      //       path: `${dir}/4-pin/LunaBluePin.png`,
      //       weight: 40,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      {
        name: "Race",
        elements: [
          {
            id: 0,
            name: "Skull",
            path: `${dir}/5-skin/Skull.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      // {
      //   name: "Facial hair",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "No facial hair",
      //       path: `${dir}/6-facial-hair/NoFacialHair.png`,
      //       weight: 100,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      // {
      //   name: "Mask",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "No mask",
      //       path: `${dir}/7-mask/NoMask.png`,
      //       weight: 55,
      //     },
      //     {
      //       id: 1,
      //       name: "Medical",
      //       path: `${dir}/7-mask/mask.png`,
      //       weight: 45,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      // {
      //   name: "Hair",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "Blonde bun",
      //       path: `${dir}/8-hair/BlondeBun.png`,
      //       weight: 55,
      //     },
      //     {
      //       id: 1,
      //       name: "Pink",
      //       path: `${dir}/8-hair/Pink.png`,
      //       weight: 45,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "Black Sunglass",
            path: `${dir}/9-accessories/sunglass 1-01.png`,
            weight: 40,
          },
          {
            id: 1,
            name: "Green Sunglass",
            path: `${dir}/9-accessories/sunglass 2-01.png`,
            weight: 35,
          },
          {
            id: 2,
            name: "Red Sunglass",
            path: `${dir}/9-accessories/sunglass 3-01.png`,
            weight: 25,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      // {
      //   name: "Headwear",
      //   elements: [
      //     {
      //       id: 0,
      //       name: "Glass dome",
      //       path: `${dir}/10-headwear/NoHeadwear.png`,
      //       weight: 100,
      //     },
      //   ],
      //   position: { x: 0, y: 0 },
      //   size: { width: width, height: height },
      // },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
