using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Host project registration refers to the registration of a Google cloud project with Api Hub as a host project. This is the project where Api Hub is provisioned. It acts as the consumer project for the Api Hub instance provisioned. Multiple runtime projects can be attached to the host project and these attachments define the scope of Api Hub.
/// </summary>
public record GoogleCloudApihubV1HostProjectRegistration
{
    /// <summary>
    /// Identifier. The name of the host project registration. Format: "projects/{project}/locations/{location}/hostProjectRegistrations/{host_project_registration}".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The time at which the host project registration was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcpProject")]
    public string? GcpProject { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
