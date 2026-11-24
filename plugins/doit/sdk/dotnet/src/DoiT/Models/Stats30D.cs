using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Trailing 30-day aggregate metrics per SP type (<c>compute</c>, <c>database</c>).
/// </summary>
public record Stats30D
{
    /// <summary>
    /// Minimal 30-day aggregate. Only <c>esr</c> and <c>savings</c> are persisted at this granularity. Responses are denominated in USD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compute")]
    public Stats30DSummary? Compute { get; init; }

    /// <summary>
    /// Minimal 30-day aggregate. Only <c>esr</c> and <c>savings</c> are persisted at this granularity. Responses are denominated in USD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public Stats30DSummary? Database { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
