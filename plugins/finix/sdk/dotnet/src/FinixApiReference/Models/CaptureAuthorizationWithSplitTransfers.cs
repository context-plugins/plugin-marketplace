using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record CaptureAuthorizationWithSplitTransfers
{
    /// <summary>
    /// The amount of the  <c>Authorization</c>  you would like to capture in cents. Must be less than or equal to the <c>amount</c> of the <c>Authorization</c>.
    /// </summary>
    [JsonPropertyName("capture_amount")]
    public required long CaptureAmount { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>An array used to detail how funds for the created <c>Transfer</c> will split and the amount <c>Merchants</c> receive.</description></item>
    ///   <item><description>The combined <c>amounts</c> under <c>split_transfers</c> must be equal to or less than the <c>amount</c> submitted in the <c>Authorization</c>.</description></item>
    ///   <item><description>For more information, see <see href="../../../../guides/online-payments/payment-features/split-transactions">Split Transactions</see>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("split_transfers")]
    public IReadOnlyList<SplitTransfer2?>? SplitTransfers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
