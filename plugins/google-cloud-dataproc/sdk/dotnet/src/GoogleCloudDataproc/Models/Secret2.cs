using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).
/// </summary>
public record Secret2
{
    /// <summary>
    /// Optional. The relative resource name of a Secret Manager secret version, in the following form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudSecret")]
    public string? CloudSecret { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
