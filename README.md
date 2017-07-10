# WalletApi

Currencies that are supported are:

- BTC
- LTC
- DOGE
- DASH

### Generate Address

`POST` /create

`Request`

```
{
	"currency": "btc"
}
```

`Response`

```
{
	"address": "1PhW7CvbXSsyQqJeSJzbmyBhmBZx31qJoq",
	"privateWif": "L2Xi5ifKEzUrudLJQSkg5QhFLgVPFSq9pyYBFLM8xM4bUczDi47F",
	"publicAddress": "02a49a40c2e38d885ed05b7fa77b64f7bfdb36cf5d4e2da94e414d270584511e14",
	"privateKey": "9e722a33d04f6126139bc734330b66a29be5be378d670607ab55a79fcdc67763"
}
```

### Get Balance

`POST` /balance

`Request`

```
{
	"currency": "ltc",
	"address": "LajyQBeZaBA1NkZDeY8YT5RYYVRkXMvb2T"
}
```

`Response`

```
{
	"address": "LajyQBeZaBA1NkZDeY8YT5RYYVRkXMvb2T",
	"total_received": 15576442198737712,
	"total_sent": 15574820368563248,
	"balance": 1621830174465,
	"unconfirmed_balance": 0,
	"final_balance": 1621830174465,
	"n_tx": 246010,
	"unconfirmed_n_tx": 0,
	"final_n_tx": 246010
}
```
