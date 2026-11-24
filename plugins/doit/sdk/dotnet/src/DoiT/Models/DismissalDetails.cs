using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Details for why an insight was dismissed.
/// </summary>
public record DismissalDetails
{
    /// <summary>
    /// The reason for dismissal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public ReasonDoiTInsightsApi? Reason { get; init; }

    /// <summary>
    /// An optional free-text comment providing additional context.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment")]
    public string? Comment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
