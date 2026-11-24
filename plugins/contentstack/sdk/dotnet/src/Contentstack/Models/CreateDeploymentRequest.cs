using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Parameters for triggering a new deployment.
/// </summary>
public record CreateDeploymentRequest
{
    /// <summary>
    /// The UID or reference to the previously uploaded build artifact.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upload_uid")]
    public string? UploadUid { get; init; }

    /// <summary>
    /// The git branch to deploy from when using repository-linked deployments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch")]
    public string? Branch { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
