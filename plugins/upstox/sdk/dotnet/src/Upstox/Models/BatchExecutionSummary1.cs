using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

/// <summary>
/// Execution summary for cancel or exit order request
/// </summary>
public record BatchExecutionSummary1
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
