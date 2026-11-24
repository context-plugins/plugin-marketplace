using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Environment details of a Saprk Application.
/// </summary>
public record AccessSparkApplicationEnvironmentInfoResponse
{
    /// <summary>
    /// Details about the Environment that the application is running in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationEnvironmentInfo")]
    public ApplicationEnvironmentInfo? ApplicationEnvironmentInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
