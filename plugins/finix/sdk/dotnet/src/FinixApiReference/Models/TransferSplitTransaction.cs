using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record TransferSplitTransaction
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> under which to create the <c>Transfer</c>.
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string Merchant { get; init; }

    /// <summary>
    /// ID of the <c>Payment Instrument</c> where funds get debited.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>An array used to detail how funds from the <c>Transfer</c> will split and the amount <c>Merchants</c> receive.</description></item>
    ///   <item><description>The combined <c>amounts</c> under <c>split_transfers</c> must be equal to the <c>amount</c> submitted in the parent <c>Transfer.</c></description></item>
    ///   <item><description>For more information, see <see href="/guides/online-payments/payment-features/split-transactions">Split Transactions</see>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("split_transfers")]
    public IReadOnlyList<SplitTransfer2?>? SplitTransfers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
