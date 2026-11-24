using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Authentication configuration used to set the default identity for the workload execution. The config specifies the type of identity (service account or user) that will be used by workloads to access resources on the project(s).
/// </summary>
public record AuthenticationConfig2
{
    /// <summary>
    /// Optional. Authentication type for the user workload running in containers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userWorkloadAuthenticationType")]
    public UserWorkloadAuthenticationType? UserWorkloadAuthenticationType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
