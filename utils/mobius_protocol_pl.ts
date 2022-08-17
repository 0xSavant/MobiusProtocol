export type MobiusProtocolPl = {
  "version": "0.1.0",
  "name": "mobius_protocol_pl",
  "instructions": [
    {
      "name": "createFundraiser",
      "accounts": [
        {
          "name": "fundraiserConfig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fundraiserSolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fundraiserUsdcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageLink",
          "type": "string"
        },
        {
          "name": "solTokenVaultBump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "contributor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "contributor",
            "type": "publicKey"
          },
          {
            "name": "contributorConfig",
            "type": "publicKey"
          },
          {
            "name": "contributions",
            "type": "u128"
          },
          {
            "name": "contributorBump",
            "type": "u8"
          },
          {
            "name": "fundraiser",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "fundraiser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fundraiser",
            "type": "publicKey"
          },
          {
            "name": "fundraiserConfig",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "imageLink",
            "type": "string"
          },
          {
            "name": "solQty",
            "type": "u128"
          },
          {
            "name": "solMint",
            "type": "publicKey"
          },
          {
            "name": "usdcQty",
            "type": "u128"
          },
          {
            "name": "usdcMint",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "solTokenVault",
            "type": "publicKey"
          },
          {
            "name": "solTokenVaultBump",
            "type": "u8"
          },
          {
            "name": "usdcTokenVault",
            "type": "publicKey"
          },
          {
            "name": "usdcTokenVaultBump",
            "type": "u8"
          },
          {
            "name": "fundraiserSolTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "fundraiserUsdcTokenAccount",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};

export const IDL: MobiusProtocolPl = {
  "version": "0.1.0",
  "name": "mobius_protocol_pl",
  "instructions": [
    {
      "name": "createFundraiser",
      "accounts": [
        {
          "name": "fundraiserConfig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fundraiser",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "fundraiserSolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fundraiserUsdcTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "imageLink",
          "type": "string"
        },
        {
          "name": "solTokenVaultBump",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "contributor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "contributor",
            "type": "publicKey"
          },
          {
            "name": "contributorConfig",
            "type": "publicKey"
          },
          {
            "name": "contributions",
            "type": "u128"
          },
          {
            "name": "contributorBump",
            "type": "u8"
          },
          {
            "name": "fundraiser",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "fundraiser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fundraiser",
            "type": "publicKey"
          },
          {
            "name": "fundraiserConfig",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "imageLink",
            "type": "string"
          },
          {
            "name": "solQty",
            "type": "u128"
          },
          {
            "name": "solMint",
            "type": "publicKey"
          },
          {
            "name": "usdcQty",
            "type": "u128"
          },
          {
            "name": "usdcMint",
            "type": "publicKey"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          },
          {
            "name": "solTokenVault",
            "type": "publicKey"
          },
          {
            "name": "solTokenVaultBump",
            "type": "u8"
          },
          {
            "name": "usdcTokenVault",
            "type": "publicKey"
          },
          {
            "name": "usdcTokenVaultBump",
            "type": "u8"
          },
          {
            "name": "fundraiserSolTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "fundraiserUsdcTokenAccount",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};