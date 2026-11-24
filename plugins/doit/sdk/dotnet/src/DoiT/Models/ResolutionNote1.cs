using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// The feedback reason given when the anomaly was resolved. Present only when <c>reviewStatus</c> is <c>RESOLVED</c> and a reason was given. The resolution comment is not included.
/// </summary>
public record ResolutionNote1
{
    [JsonPropertyName("reason")]
    public required Reason1 Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
