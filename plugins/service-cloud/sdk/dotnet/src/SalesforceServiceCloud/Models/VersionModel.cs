using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;
using SalesforceServiceCloud.Models.Enums;

namespace SalesforceServiceCloud.Models;

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
