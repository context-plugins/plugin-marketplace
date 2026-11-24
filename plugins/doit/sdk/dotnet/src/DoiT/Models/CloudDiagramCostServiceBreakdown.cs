using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A single service entry within the cost-by-service breakdown.
/// </summary>
public record CloudDiagramCostServiceBreakdown
{
    /// <summary>
    /// Cloud service label (e.g. <c>EC2</c>).
    /// </summary>
    [JsonPropertyName("service")]
    public required string Service { get; init; }

    /// <summary>
    /// Cost amount for this service within the snapshot window.
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
