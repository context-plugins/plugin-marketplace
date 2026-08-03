# Enums

62 enums (62 string / 0 int), namespace `BinancePublicSpotApi.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `AboveTimeInForce` | StringEnum | `Gtc (GTC)`, `Ioc (IOC)`, `Fok (FOK)` | — | `Models/Enums/AboveTimeInForce.cs` |
| `AccountType` | StringEnum | `Spot (SPOT)`, `Margin (MARGIN)` | — | `Models/Enums/AccountType.cs` |
| `AccountType3` | StringEnum | `Main (MAIN)`, `Card (CARD)` | — | `Models/Enums/AccountType3.cs` |
| `AutoCompoundPlan` | StringEnum | `None (NONE)`, `Standard (STANDARD)`, `Advance (ADVANCE)` | — | `Models/Enums/AutoCompoundPlan.cs` |
| `BelowTimeInForce` | StringEnum | `Gtc (GTC)`, `Ioc (IOC)`, `Fok (FOK)` | — | `Models/Enums/BelowTimeInForce.cs` |
| `CancelRestrictions` | StringEnum | `OnlyNew (ONLY_NEW)`, `OnlyPartiallyFilled (ONLY_PARTIALLY_FILLED)` | — | `Models/Enums/CancelRestrictions.cs` |
| `DataType` | StringEnum | `TDepth (T_DEPTH)`, `SDepth (S_DEPTH)` | — | `Models/Enums/DataType.cs` |
| `Direction` | StringEnum | `Additional (ADDITIONAL)`, `Reduced (REDUCED)` | — | `Models/Enums/Direction.cs` |
| `ExpiredType` | StringEnum | `_1D (1_D)`, `_3D (3_D)`, `_7D (7_D)`, `_30D (30_D)` | — | `Models/Enums/ExpiredType.cs` |
| `FromAccountType` | StringEnum | `Spot (SPOT)`, `UsdtFuture (USDT_FUTURE)`, `CoinFuture (COIN_FUTURE)`, `Margin (MARGIN)`, `IsolatedMargin (ISOLATED_MARGIN)` | — | `Models/Enums/FromAccountType.cs` |
| `InterestBnbburn` | StringEnum | `True (true)`, `False (false)` | — | `Models/Enums/InterestBnbburn.cs` |
| `Interval` | StringEnum | `_1S (1s)`, `_1M (1m)`, `_3M (3m)`, `_5M (5m)`, `_15M (15m)`, `_30M (30m)`, `_1H (1h)`, `_2H (2h)`, `_4H (4h)`, `_6H (6h)`, `_8H (8h)`, `_12H (12h)`, `_1D (1d)`, `_3D (3d)`, `_1W (1w)`, `_1M2 (1M)` | — | `Models/Enums/Interval.cs` |
| `IsFlexibleRate` | StringEnum | `True (TRUE)`, `False (FALSE)` | — | `Models/Enums/IsFlexibleRate.cs` |
| `IsFreeze` | StringEnum | `True (true)`, `False (false)` | — | `Models/Enums/IsFreeze.cs` |
| `IsIsolated` | StringEnum | `True (TRUE)`, `False (FALSE)` | — | `Models/Enums/IsIsolated.cs` |
| `NeedBtcValuation` | StringEnum | `True (true)`, `False (false)` | — | `Models/Enums/NeedBtcValuation.cs` |
| `NewOrderRespType` | StringEnum | `Ack (ACK)`, `Result (RESULT)`, `Full (FULL)` | — | `Models/Enums/NewOrderRespType.cs` |
| `OptionType` | StringEnum | `Call (CALL)`, `Put (PUT)` | — | `Models/Enums/OptionType.cs` |
| `PendingAboveTimeInForce` | StringEnum | `Gtc (GTC)`, `Ioc (IOC)`, `Fok (FOK)` | — | `Models/Enums/PendingAboveTimeInForce.cs` |
| `PendingAboveType` | StringEnum | `LimitMaker (LIMIT_MAKER)`, `StopLoss (STOP_LOSS)`, `StopLossLimit (STOP_LOSS_LIMIT)` | — | `Models/Enums/PendingAboveType.cs` |
| `PendingBelowTimeInForce` | StringEnum | `Gtc (GTC)`, `Ioc (IOC)`, `Fok (FOK)` | — | `Models/Enums/PendingBelowTimeInForce.cs` |
| `PendingBelowType` | StringEnum | `LimitMaker (LIMIT_MAKER)`, `StopLoss (STOP_LOSS)`, `StopLossLimit (STOP_LOSS_LIMIT)` | — | `Models/Enums/PendingBelowType.cs` |
| `PendingSide` | StringEnum | `Buy (BUY)`, `Sell (SELL)` | — | `Models/Enums/PendingSide.cs` |
| `PendingTimeInForce` | StringEnum | `Gtc (GTC)`, `Ioc (IOC)`, `Fok (FOK)` | — | `Models/Enums/PendingTimeInForce.cs` |
| `PendingType` | StringEnum | `Limit (LIMIT)`, `Market (MARKET)`, `StopLoss (STOP_LOSS)`, `StopLossLimit (STOP_LOSS_LIMIT)`, `TakeProfit (TAKE_PROFIT)`, `TakeProfitLimit (TAKE_PROFIT_LIMIT)`, `LimitMaker (LIMIT_MAKER)` | — | `Models/Enums/PendingType.cs` |
| `PlanType` | StringEnum | `Single (SINGLE)`, `Portfolio (PORTFOLIO)`, `Index (INDEX)` | — | `Models/Enums/PlanType.cs` |
| `PlanType1` | StringEnum | `Single (SINGLE)`, `Portfolio (PORTFOLIO)`, `Index (INDEX)`, `All (ALL)` | — | `Models/Enums/PlanType1.cs` |
| `PositionSide` | StringEnum | `Both (BOTH)`, `Long (LONG)`, `Short (SHORT)` | — | `Models/Enums/PositionSide.cs` |
| `RedeemTo` | StringEnum | `Spot (SPOT)`, `Flexible (FLEXIBLE)` | — | `Models/Enums/RedeemTo.cs` |
| `SelfTradePreventionMode` | StringEnum | `ExpireTaker (EXPIRE_TAKER)`, `ExpireMaker (EXPIRE_MAKER)`, `ExpireBoth (EXPIRE_BOTH)`, `None (NONE)` | — | `Models/Enums/SelfTradePreventionMode.cs` |
| `Side` | StringEnum | `Sell (SELL)`, `Buy (BUY)` | — | `Models/Enums/Side.cs` |
| `SideEffectType` | StringEnum | `NoSideEffect (NO_SIDE_EFFECT)`, `MarginBuy (MARGIN_BUY)`, `AutoRepay (AUTO_REPAY)` | — | `Models/Enums/SideEffectType.cs` |
| `SideEffectType1` | StringEnum | `NoSideEffect (NO_SIDE_EFFECT)`, `MarginBuy (MARGIN_BUY)` | — | `Models/Enums/SideEffectType1.cs` |
| `SortBy` | StringEnum | `StartTime (START_TIME)`, `LotSize (LOT_SIZE)`, `InterestRate (INTEREST_RATE)`, `Duration (DURATION)` | — | `Models/Enums/SortBy.cs` |
| `SourceType` | StringEnum | `MainSite (MAIN_SITE)`, `Tr (TR)` | — | `Models/Enums/SourceType.cs` |
| `SpotBnbburn` | StringEnum | `True (true)`, `False (false)` | — | `Models/Enums/SpotBnbburn.cs` |
| `Status` | StringEnum | `All (ALL)`, `Subscribable (SUBSCRIBABLE)`, `Unsubscribable (UNSUBSCRIBABLE)` | — | `Models/Enums/Status.cs` |
| `Status1` | StringEnum | `Ongoing (ONGOING)`, `Paused (PAUSED)`, `Removed (REMOVED)` | — | `Models/Enums/Status1.cs` |
| `Status2` | StringEnum | `Pending (PENDING)`, `PurchaseSuccess (PURCHASE_SUCCESS)`, `Settled (SETTLED)`, `PurchaseFail (PURCHASE_FAIL)`, `Refunding (REFUNDING)`, `RefundSuccess (REFUND_SUCCESS)`, `Settling (SETTLING)` | — | `Models/Enums/Status2.cs` |
| `StopLimitTimeInForce` | StringEnum | `Gtc (GTC)`, `Fok (FOK)`, `Ioc (IOC)` | — | `Models/Enums/StopLimitTimeInForce.cs` |
| `SubscriptionCycle` | StringEnum | `H1 (H1)`, `H4 (H4)`, `H8 (H8)`, `H12 (H12)`, `Weekly (WEEKLY)`, `Daily (DAILY)`, `Monthly (MONTHLY)`, `BiWeekly (BI_WEEKLY)` | — | `Models/Enums/SubscriptionCycle.cs` |
| `SubscriptionStartWeekday` | StringEnum | `Mon (MON)`, `Tue (TUE)`, `Wed (WED)`, `Thu (THU)`, `Fri (FRI)`, `Sat (SAT)`, `Sun (SUN)` | — | `Models/Enums/SubscriptionStartWeekday.cs` |
| `TimeInForce` | StringEnum | `Gtc (GTC)`, `Ioc (IOC)`, `Fok (FOK)` | — | `Models/Enums/TimeInForce.cs` |
| `ToAccountType` | StringEnum | `Spot (SPOT)`, `UsdtFuture (USDT_FUTURE)`, `CoinFuture (COIN_FUTURE)`, `Margin (MARGIN)`, `IsolatedMargin (ISOLATED_MARGIN)` | — | `Models/Enums/ToAccountType.cs` |
| `TradeType` | StringEnum | `Buy (BUY)`, `Sell (SELL)` | — | `Models/Enums/TradeType.cs` |
| `TransferFunctionAccountType` | StringEnum | `Spot (SPOT)`, `Margin (MARGIN)`, `IsolatedMargin (ISOLATED_MARGIN)`, `UsdtFuture (USDT_FUTURE)`, `CoinFuture (COIN_FUTURE)` | — | `Models/Enums/TransferFunctionAccountType.cs` |
| `Transfers` | StringEnum | `From (FROM)`, `To (TO)` | — | `Models/Enums/Transfers.cs` |
| `TransferSide` | StringEnum | `ToUm (TO_UM)`, `FromUm (FROM_UM)` | — | `Models/Enums/TransferSide.cs` |
| `Type1` | StringEnum | `Limit (LIMIT)`, `Market (MARKET)`, `StopLoss (STOP_LOSS)`, `StopLossLimit (STOP_LOSS_LIMIT)`, `TakeProfit (TAKE_PROFIT)`, `TakeProfitLimit (TAKE_PROFIT_LIMIT)`, `LimitMaker (LIMIT_MAKER)` | — | `Models/Enums/Type1.cs` |
| `Type2` | StringEnum | `RollIn (ROLL_IN)`, `RollOut (ROLL_OUT)` | — | `Models/Enums/Type2.cs` |
| `Type3` | StringEnum | `Transfer (TRANSFER)`, `Borrow (BORROW)`, `Repay (REPAY)`, `BuyIncome (BUY_INCOME)`, `BuyExpense (BUY_EXPENSE)`, `SellIncome (SELL_INCOME)`, `SellExpense (SELL_EXPENSE)`, `TradingCommission (TRADING_COMMISSION)`, `BuyLiquidation (BUY_LIQUIDATION)`, `SellLiquidation (SELL_LIQUIDATION)`, `RepayLiquidation (REPAY_LIQUIDATION)`, `OtherLiquidation (OTHER_LIQUIDATION)`, `LiquidationFee (LIQUIDATION_FEE)`, `SmallBalanceConvert (SMALL_BALANCE_CONVERT)`, `CommissionReturn (COMMISSION_RETURN)`, `SmallConvert (SMALL_CONVERT)` | — | `Models/Enums/Type3.cs` |
| `Type4` | StringEnum | `Margin (MARGIN)`, `Isolated (ISOLATED)` | — | `Models/Enums/Type4.cs` |
| `Type6` | StringEnum | `Spot (SPOT)`, `Margin (MARGIN)`, `Futures (FUTURES)` | — | `Models/Enums/Type6.cs` |
| `Type7` | StringEnum | `MainC2C (MAIN_C2C)`, `MainUmfuture (MAIN_UMFUTURE)`, `MainCmfuture (MAIN_CMFUTURE)`, `MainMargin (MAIN_MARGIN)`, `MainMining (MAIN_MINING)`, `C2CMain (C2C_MAIN)`, `C2CUmfuture (C2C_UMFUTURE)`, `C2CMining (C2C_MINING)`, `C2CMargin (C2C_MARGIN)`, `UmfutureMain (UMFUTURE_MAIN)`, `UmfutureC2C (UMFUTURE_C2C)`, `UmfutureMargin (UMFUTURE_MARGIN)`, `CmfutureMain (CMFUTURE_MAIN)`, `CmfutureMargin (CMFUTURE_MARGIN)`, `MarginMain (MARGIN_MAIN)`, `MarginUmfuture (MARGIN_UMFUTURE)`, `MarginCmfuture (MARGIN_CMFUTURE)`, `MarginMining (MARGIN_MINING)`, `MarginC2C (MARGIN_C2C)`, `MiningMain (MINING_MAIN)`, `MiningUmfuture (MINING_UMFUTURE)`, `MiningC2C (MINING_C2C)`, `MiningMargin (MINING_MARGIN)`, `MainPay (MAIN_PAY)`, `PayMain (PAY_MAIN)`, `IsolatedmarginMargin (ISOLATEDMARGIN_MARGIN)`, `MarginIsolatedmargin (MARGIN_ISOLATEDMARGIN)`, `IsolatedmarginIsolatedmargin (ISOLATEDMARGIN_ISOLATEDMARGIN)` | — | `Models/Enums/Type7.cs` |
| `Type8` | StringEnum | `Activity (ACTIVITY)`, `CustomizedFixed (CUSTOMIZED_FIXED)` | — | `Models/Enums/Type8.cs` |
| `Type9` | StringEnum | `BorrowIn (borrowIn)`, `CollateralSpent (collateralSpent)`, `RepayAmount (repayAmount)`, `CollateralReturn (collateralReturn)`, `AddCollateral (addCollateral)`, `RemoveCollateral (removeCollateral)`, `CollateralReturnAfterLiquidation (collateralReturnAfterLiquidation)` | — | `Models/Enums/Type9.cs` |
| `TypeModel` | StringEnum | `Full (FULL)`, `Mini (MINI)` | — | `Models/Enums/TypeModel.cs` |
| `Urgency` | StringEnum | `Low (LOW)`, `Medium (MEDIUM)`, `High (HIGH)` | — | `Models/Enums/Urgency.cs` |
| `WalletType` | StringEnum | `Spot (SPOT)`, `Funding (FUNDING)`, `SpotFunding (SPOT_FUNDING)` | — | `Models/Enums/WalletType.cs` |
| `WorkingSide` | StringEnum | `Buy (BUY)`, `Sell (SELL)` | — | `Models/Enums/WorkingSide.cs` |
| `WorkingTimeInForce` | StringEnum | `Gtc (GTC)`, `Ioc (IOC)`, `Fok (FOK)` | — | `Models/Enums/WorkingTimeInForce.cs` |
| `WorkingType` | StringEnum | `Limit (LIMIT)`, `LimitMaker (LIMIT_MAKER)` | — | `Models/Enums/WorkingType.cs` |
