using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record MultiOrderSummary
{
    /// <summary>
    /// The total number of order lines present in the payload.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; }

    /// <summary>
    /// The number of order lines that were successfully placed without any errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    public int? Success { get; init; }

    /// <summary>
    /// The number of order lines that encountered errors during processing, despite their payloads being valid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public int? Error { get; init; }

    /// <summary>
    /// The number of order lines with payload errors, indicating formatting or data validity issues.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Note&lt;/b&gt;: Orders are processed only if the entire batch is free of payload_error, ensuring error-free transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payload_error")]
    public int? PayloadError { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
