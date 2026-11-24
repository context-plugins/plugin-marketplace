using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record GeometryReportingReportsApi
{
    /// <summary>
    /// Latitude
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lat")]
    public string? Lat { get; init; }

    /// <summary>
    /// Longitude
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lng")]
    public string? Lng { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
