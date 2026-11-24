using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Year-to-date and lifetime realized savings for one product line.
/// </summary>
public record GcpSavingsTotalsByService
{
    /// <summary>
    /// Year-to-date realized savings.
    /// </summary>
    [JsonPropertyName("ytd")]
    public required Money Ytd { get; init; }

    /// <summary>
    /// Lifetime realized savings since onboarding.
    /// </summary>
    [JsonPropertyName("lifetime")]
    public required Money Lifetime { get; init; }

    /// <summary>
    /// Product line these savings totals belong to.
    /// </summary>
    [JsonPropertyName("service")]
    public required Service2DoiTPerfectScaleForCommitmentsGcpApi Service { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
