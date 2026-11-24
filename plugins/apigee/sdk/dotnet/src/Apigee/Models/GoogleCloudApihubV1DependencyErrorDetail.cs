using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Details describing error condition of a dependency.
/// </summary>
public record GoogleCloudApihubV1DependencyErrorDetail
{
    /// <summary>
    /// Optional. Error in the dependency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error1? Error { get; init; }

    /// <summary>
    /// Optional. Timestamp at which the error was found.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorTime")]
    public string? ErrorTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
