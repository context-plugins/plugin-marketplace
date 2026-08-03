# Enums

19 enums (19 string / 0 int), namespace `TesserApiV1.Models.Enums`. These are `StringEnum<T>` / `IntEnum<T>` records (NOT C# enums) — construct via the static members or `Type.FromValue(wireValue)`. Members are listed as `CSharpMemberName (wire_value)`: the member name is the literal C# identifier to write in code (e.g. `CollectionMethod.Invoice`), the parenthesized value is what goes over the wire. Summary is the enum's XML doc summary (`—` when the source has none).

| Enum | Backing | Members | Summary | Source |
|---|---|---|---|---|
| `BalanceStatus` | StringEnum | `Unreserved (unreserved)`, `Reserved (reserved)`, `InsufficientBalance (insufficient_balance)` | — | `Models/Enums/BalanceStatus.cs` |
| `Classification` | StringEnum | `Individual (individual)`, `Business (business)` | Classification: 'individual' or 'business'. | `Models/Enums/Classification.cs` |
| `Classification7` | StringEnum | `Individual (individual)`, `Business (business)` | — | `Models/Enums/Classification7.cs` |
| `Classification71` | StringEnum | `Individual (individual)`, `Business (business)` | Filter by classification | `Models/Enums/Classification71.cs` |
| `Classification72` | StringEnum | `Individual (individual)`, `Business (business)` | Filter by classification ('individual' or 'business'). | `Models/Enums/Classification72.cs` |
| `Direction` | StringEnum | `Inbound (inbound)`, `Outbound (outbound)`, `Internal (internal)` | Payment direction: 'inbound', 'outbound', 'internal'. | `Models/Enums/Direction.cs` |
| `Direction1` | StringEnum | `Inbound (inbound)`, `Outbound (outbound)`, `Internal (internal)` | Payment direction: 'inbound', 'outbound', 'internal' | `Models/Enums/Direction1.cs` |
| `PaymentType` | StringEnum | `Withdrawal (withdrawal)`, `Deposit (deposit)`, `Onramp (onramp)`, `Offramp (offramp)`, `Payment (payment)`, `Transfer (transfer)` | Type of payment operation: 'payment' (wallet-to-wallet), 'offramp' (crypto-to-fiat), 'onramp' (fiat-to-crypto), 'withdrawal', 'deposit', or 'transfer'. | `Models/Enums/PaymentType.cs` |
| `PaymentType3` | StringEnum | `Withdrawal (withdrawal)`, `Deposit (deposit)`, `Onramp (onramp)`, `Offramp (offramp)`, `Payment (payment)`, `Transfer (transfer)` | — | `Models/Enums/PaymentType3.cs` |
| `PaymentType31` | StringEnum | `Withdrawal (withdrawal)`, `Deposit (deposit)`, `Onramp (onramp)`, `Offramp (offramp)`, `Payment (payment)`, `Transfer (transfer)` | Filter payments by type ('withdrawal', 'deposit', 'onramp', 'offramp', 'payment', 'transfer'). | `Models/Enums/PaymentType31.cs` |
| `ProviderKey` | StringEnum | `Alfred (alfred)`, `CircleMint (circle_mint)` | — | `Models/Enums/ProviderKey.cs` |
| `RiskStatus` | StringEnum | `Unchecked (unchecked)`, `AwaitingDecision (awaiting_decision)`, `Approved (approved)`, `Rejected (rejected)` | Current risk status. | `Models/Enums/RiskStatus.cs` |
| `Status` | StringEnum | `Created (created)`, `Submitted (submitted)`, `Confirmed (confirmed)`, `Finalized (finalized)`, `Failed (failed)` | Step status: 'created', 'submitted', 'confirmed', 'finalized', 'failed'. | `Models/Enums/Status.cs` |
| `Status1` | StringEnum | `Created (created)`, `Submitted (submitted)`, `Confirmed (confirmed)`, `Finalized (finalized)`, `Completed (completed)`, `Failed (failed)` | Step status: 'created', 'submitted', 'confirmed', 'finalized', 'failed'. | `Models/Enums/Status1.cs` |
| `StepType` | StringEnum | `StablecoinTransfer (stablecoin_transfer)`, `Offramp (offramp)`, `Onramp (onramp)`, `FiatTransfer (fiat_transfer)` | Step type: 'stablecoin_transfer', 'offramp', 'onramp', 'fiat_transfer'. | `Models/Enums/StepType.cs` |
| `Type3` | StringEnum | `StablecoinEthereum (stablecoin_ethereum)`, `StablecoinSolana (stablecoin_solana)`, `StablecoinStellar (stablecoin_stellar)` | Wallet type. | `Models/Enums/Type3.cs` |
| `Type4` | StringEnum | `FiatBank (fiat_bank)`, `StablecoinEthereum (stablecoin_ethereum)`, `StablecoinSolana (stablecoin_solana)`, `StablecoinStellar (stablecoin_stellar)` | — | `Models/Enums/Type4.cs` |
| `Type41` | StringEnum | `FiatBank (fiat_bank)`, `StablecoinEthereum (stablecoin_ethereum)`, `StablecoinSolana (stablecoin_solana)`, `StablecoinStellar (stablecoin_stellar)` | Filter by account type | `Models/Enums/Type41.cs` |
| `TypeModel` | StringEnum | `FiatBank (fiat_bank)`, `StablecoinEthereum (stablecoin_ethereum)`, `StablecoinSolana (stablecoin_solana)`, `StablecoinStellar (stablecoin_stellar)` | Account type. | `Models/Enums/TypeModel.cs` |
