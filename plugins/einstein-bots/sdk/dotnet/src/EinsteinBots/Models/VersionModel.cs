using System.Text.Json.Serialization;
using EinsteinBots.Core.Models;
using EinsteinBots.Models.Enums;

namespace EinsteinBots.Models;

public record VersionModel
{
    /// <summary>
    /// API Version number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionNumber")]
    public string? VersionNumber { get; init; }

    /// <summary>
    /// API Version status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusEinsteinBotsApiBetaVersionsApi? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
