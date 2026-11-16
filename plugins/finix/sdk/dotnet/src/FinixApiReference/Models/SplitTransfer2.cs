using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record SplitTransfer2
{
    /// <summary>
    /// <list type="bullet">
    ///   <item><description>The ID of the <c>Merchant</c> that will receive the specified <c>amount</c> under the <c>split_transfers</c> object.</description></item>
    ///   <item><description>In Split Transactions, the merchants specified in the <c>split_transfers</c> object are the ancillary merchants.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public string? Merchant { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>The amount of funds that get split and paid out to the specified <c>Merchant</c>.</description></item>
    ///   <item><description>Must be less than or equal to the <c>amount</c> of the <c>Transfer.</c></description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>A processing fee is deducted when the <c>Merchant</c> receives their payout, specified in cents.</description></item>
    ///   <item><description>Must be less than or equal to the total amount being split for the designated <c>Merchant</c>.</description></item>
    ///   <item><description>By default, this fee is set to <c>0</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee")]
    public int? Fee { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
