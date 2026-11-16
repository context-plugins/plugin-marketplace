using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record RefundTransferSplitTransaction
{
    /// <summary>
    /// The amount of the refund in cents. It must be equal to or less than the amount of the original <c>Transfer</c>.
    /// </summary>
    [JsonPropertyName("refund_amount")]
    public required int RefundAmount { get; init; }

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
