using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Container object with account details
/// </summary>
public record AccountResponseResource1
{
    /// <summary>
    /// Always "account".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Uniquely identifies the account.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Mapped directly from CDR 'nickname'. Represents the user-defined name for the account without fallback to displayName.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Mapped directly from CDR 'displayName'. Represents the institution-defined display name for the account.
    /// </summary>
    [JsonPropertyName("displayName")]
    public required string DisplayName { get; init; }

    /// <summary>
    /// current rate to calculate interest earned being applied to deposit balances as it stands at the time of the API call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("depositRate")]
    public string? DepositRate { get; init; }

    /// <summary>
    /// The current rate to calculate interest payable being applied to lending balances as it stands at the time of the API call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lendingRate")]
    public string? LendingRate { get; init; }

    /// <summary>
    /// The unmasked BSB for the account. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bsb")]
    public string? Bsb { get; init; }

    /// <summary>
    /// The unmasked account number for the account. Should not be supplied if the account number is a PAN requiring PCI compliance. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unmaskedAccNum")]
    public string? UnmaskedAccNum { get; init; }

    /// <summary>
    /// Date that the account was created (if known).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDate")]
    public string? CreationDate { get; init; }

    /// <summary>
    /// The name of the account holder as returned by the institution. No formatting is applied. Returns a string or null when not available.
    /// </summary>
    [JsonPropertyName("accountHolder")]
    public required string? AccountHolder { get; init; }

    /// <summary>
    /// A masked version of the account. Whether BSB/Account Number, Credit Card PAN or another number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maskedNumber")]
    public string? MaskedNumber { get; init; }

    /// <summary>
    /// Value indicating the number of customers that have ownership of the account, according to the data holder's definition of account ownership. Does not indicate that all account owners are eligible consumers.
    /// </summary>
    [JsonPropertyName("accountOwnership")]
    public required AccountOwnership AccountOwnership { get; init; }

    /// <summary>
    /// Flag indicating that the customer associated with the authorisation is an owner of the account. Does not indicate sole ownership, however. If not present then 'true' is assumed.
    /// </summary>
    [JsonPropertyName("isOwned")]
    public required bool IsOwned { get; init; }

    /// <summary>
    /// Object representing the available limit amortised according to payment schedule. Assumed to be zero if absent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amortisedLimit")]
    public string? AmortisedLimit { get; init; }

    /// <summary>
    /// Optional field to indicate if this account is part of a bundle that is providing additional benefit to the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bundleName")]
    public string? BundleName { get; init; }

    /// <summary>
    /// Optional array of balances for the account in other currencies. Included to support accounts that support multi-currency purses such as Travel Cards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purses")]
    public IReadOnlyList<Purse>? Purses { get; init; }

    /// <summary>
    /// BSB + account number.
    /// </summary>
    [JsonPropertyName("accountNo")]
    public required string AccountNo { get; init; }

    /// <summary>
    /// Funds that are available to an account holder for withdrawal or other use. This may include funds from an overdraft facility or line of credit. As well as funds classified as the available balance, such as from cleared and existing deposits.
    /// </summary>
    [JsonPropertyName("availableFunds")]
    public required string? AvailableFunds { get; init; }

    /// <summary>
    /// Amount of funds in the account right now - excluding any pending transactions. For a credit card this would be zero or the minus amount spent.
    /// </summary>
    [JsonPropertyName("balance")]
    public required string? Balance { get; init; }

    /// <summary>
    /// Eligible account types are credit-card, loan and mortgage.
    /// </summary>
    [JsonPropertyName("creditLimit")]
    public required string? CreditLimit { get; init; }

    /// <summary>
    /// Describes the class(type) of accounts. - transaction - savings - credit-card - mortgage - loan - investment - term-deposit - insurance - foreign - unknown
    /// </summary>
    [JsonPropertyName("class")]
    public required Class1 Class { get; init; }

    /// <summary>
    /// The id of the connection resource that was used to retrieve the account.
    /// </summary>
    [JsonPropertyName("connection")]
    public required string Connection { get; init; }

    /// <summary>
    /// The currency the funds are stored in, using ISO 4217 standard.
    /// </summary>
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    /// <summary>
    /// The id of the institution resource the account originated from.
    /// </summary>
    [JsonPropertyName("institution")]
    public required string Institution { get; init; }

    /// <summary>
    /// Timestamp of last update, UTC, RFC 3339 format e.g. "2017-09-28T13:39:33Z"
    /// </summary>
    [JsonPropertyName("lastUpdated")]
    public required string LastUpdated { get; init; }

    /// <summary>
    /// Account status
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public Meta? Meta { get; init; }

    /// <summary>
    /// An array of date intervals indicating the coverage of the transaction data relating to the account.
    /// Will return a single element for accounts sourced from a single bank connection.
    /// Will return multiple elements in cases where there have been multiple PDF/CSV uploads for an account.
    /// </summary>
    [JsonPropertyName("transactionIntervals")]
    public required IReadOnlyList<TransactionInterval> TransactionIntervals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
