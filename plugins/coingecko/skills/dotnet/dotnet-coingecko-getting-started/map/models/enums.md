# Enums

28 enums (28 string / 0 int), namespace `CoinGeckoDemoApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `Currency` | StringEnum | `Usd (usd)`, `Token (token)` | — | `Models/Enums/Currency.cs` |
| `Days` | StringEnum | `_1 (1)`, `_7 (7)`, `_14 (14)`, `_30 (30)`, `_90 (90)`, `_180 (180)`, `_365 (365)` | — | `Models/Enums/Days.cs` |
| `DexPairFormat` | StringEnum | `ContractAddress (contract_address)`, `Symbol (symbol)` | — | `Models/Enums/DexPairFormat.cs` |
| `Duration` | StringEnum | `_5M (5m)`, `_1H (1h)`, `_6H (6h)`, `_24H (24h)` | — | `Models/Enums/Duration.cs` |
| `Entity` | StringEnum | `Companies (companies)`, `Governments (governments)` | — | `Models/Enums/Entity.cs` |
| `EntityType` | StringEnum | `Company (company)`, `Government (government)` | — | `Models/Enums/EntityType.cs` |
| `Filter` | StringEnum | `Nft (nft)` | — | `Models/Enums/Filter.cs` |
| `Include` | StringEnum | `TopPools (top_pools)` | — | `Models/Enums/Include.cs` |
| `Include2` | StringEnum | `Pool (pool)` | — | `Models/Enums/Include2.cs` |
| `Include3` | StringEnum | `Network (network)` | — | `Models/Enums/Include3.cs` |
| `IncludeTickers` | StringEnum | `All (all)`, `Unexpired (unexpired)` | — | `Models/Enums/IncludeTickers.cs` |
| `IncludeTokens` | StringEnum | `Top (top)`, `All (all)` | — | `Models/Enums/IncludeTokens.cs` |
| `Interval` | StringEnum | `Hourly (hourly)`, `Daily (daily)` | — | `Models/Enums/Interval.cs` |
| `Locale` | StringEnum | `Ar (ar)`, `Bg (bg)`, `Cs (cs)`, `Da (da)`, `De (de)`, `El (el)`, `En (en)`, `Es (es)`, `Fi (fi)`, `Fr (fr)`, `He (he)`, `Hi (hi)`, `Hr (hr)`, `Hu (hu)`, `Id (id)`, `It (it)`, `Ja (ja)`, `Ko (ko)`, `Lt (lt)`, `Nl (nl)`, `No (no)`, `Pl (pl)`, `Pt (pt)`, `Ro (ro)`, `Ru (ru)`, `Sk (sk)`, `Sl (sl)`, `Sv (sv)`, `Th (th)`, `Tr (tr)`, `Uk (uk)`, `Vi (vi)`, `Zh (zh)`, `ZhTw (zh-tw)` | — | `Models/Enums/Locale.cs` |
| `Order` | StringEnum | `MarketCapAsc (market_cap_asc)`, `MarketCapDesc (market_cap_desc)`, `VolumeAsc (volume_asc)`, `VolumeDesc (volume_desc)`, `IdAsc (id_asc)`, `IdDesc (id_desc)` | — | `Models/Enums/Order.cs` |
| `Order1` | StringEnum | `TrustScoreDesc (trust_score_desc)`, `TrustScoreAsc (trust_score_asc)`, `VolumeDesc (volume_desc)`, `VolumeAsc (volume_asc)` | — | `Models/Enums/Order1.cs` |
| `Order2` | StringEnum | `MarketCapDesc (market_cap_desc)`, `MarketCapAsc (market_cap_asc)`, `NameDesc (name_desc)`, `NameAsc (name_asc)`, `MarketCapChange24HDesc (market_cap_change_24h_desc)`, `MarketCapChange24HAsc (market_cap_change_24h_asc)` | — | `Models/Enums/Order2.cs` |
| `Order3` | StringEnum | `MarketCapAsc (market_cap_asc)`, `MarketCapDesc (market_cap_desc)`, `TrustScoreDesc (trust_score_desc)`, `TrustScoreAsc (trust_score_asc)`, `VolumeDesc (volume_desc)`, `VolumeAsc (volume_asc)`, `BaseTarget (base_target)` | — | `Models/Enums/Order3.cs` |
| `Order4` | StringEnum | `NameAsc (name_asc)`, `NameDesc (name_desc)`, `OpenInterestBtcAsc (open_interest_btc_asc)`, `OpenInterestBtcDesc (open_interest_btc_desc)`, `TradeVolume24HBtcAsc (trade_volume_24h_btc_asc)`, `TradeVolume24HBtcDesc (trade_volume_24h_btc_desc)` | — | `Models/Enums/Order4.cs` |
| `Order5` | StringEnum | `TotalHoldingsUsdDesc (total_holdings_usd_desc)`, `TotalHoldingsUsdAsc (total_holdings_usd_asc)` | — | `Models/Enums/Order5.cs` |
| `Order6` | StringEnum | `DateDesc (date_desc)`, `DateAsc (date_asc)`, `HoldingNetChangeDesc (holding_net_change_desc)`, `HoldingNetChangeAsc (holding_net_change_asc)`, `TransactionValueUsdDesc (transaction_value_usd_desc)`, `TransactionValueUsdAsc (transaction_value_usd_asc)`, `AverageCostDesc (average_cost_desc)`, `AverageCostAsc (average_cost_asc)` | — | `Models/Enums/Order6.cs` |
| `Order7` | StringEnum | `H24VolumeUsdAsc (h24_volume_usd_asc)`, `H24VolumeUsdDesc (h24_volume_usd_desc)`, `H24VolumeNativeAsc (h24_volume_native_asc)`, `H24VolumeNativeDesc (h24_volume_native_desc)`, `FloorPriceNativeAsc (floor_price_native_asc)`, `FloorPriceNativeDesc (floor_price_native_desc)`, `MarketCapNativeAsc (market_cap_native_asc)`, `MarketCapNativeDesc (market_cap_native_desc)`, `MarketCapUsdAsc (market_cap_usd_asc)`, `MarketCapUsdDesc (market_cap_usd_desc)` | — | `Models/Enums/Order7.cs` |
| `Precision` | StringEnum | `Full (full)`, `_0 (0)`, `_1 (1)`, `_2 (2)`, `_3 (3)`, `_4 (4)`, `_5 (5)`, `_6 (6)`, `_7 (7)`, `_8 (8)`, `_9 (9)`, `_10 (10)`, `_11 (11)`, `_12 (12)`, `_13 (13)`, `_14 (14)`, `_15 (15)`, `_16 (16)`, `_17 (17)`, `_18 (18)` | — | `Models/Enums/Precision.cs` |
| `Sort` | StringEnum | `H24TxCountDesc (h24_tx_count_desc)`, `H24VolumeUsdDesc (h24_volume_usd_desc)` | — | `Models/Enums/Sort.cs` |
| `Sort2` | StringEnum | `H24VolumeUsdLiquidityDesc (h24_volume_usd_liquidity_desc)`, `H24TxCountDesc (h24_tx_count_desc)`, `H24VolumeUsdDesc (h24_volume_usd_desc)` | — | `Models/Enums/Sort2.cs` |
| `Status` | StringEnum | `Active (active)`, `Inactive (inactive)` | — | `Models/Enums/Status.cs` |
| `Timeframe` | StringEnum | `Day (day)`, `Hour (hour)`, `Minute (minute)` | — | `Models/Enums/Timeframe.cs` |
| `TypeModel` | StringEnum | `Buy (buy)`, `Sell (sell)` | Transaction type | `Models/Enums/TypeModel.cs` |
