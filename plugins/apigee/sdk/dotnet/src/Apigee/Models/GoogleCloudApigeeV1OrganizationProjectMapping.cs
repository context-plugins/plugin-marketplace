using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1OrganizationProjectMapping
{
    /// <summary>
    /// Google Cloud project associated with the Apigee organization
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    /// <summary>
    /// DEPRECATED: Use <c>project_id</c>. An Apigee Organization is mapped to a single project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectIds")]
    public IReadOnlyList<string>? ProjectIds { get; init; }

    /// <summary>
    /// Name of the Apigee organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization")]
    public string? Organization { get; init; }

    /// <summary>
    /// Output only. The Google Cloud region where control plane data is located. For more information, see https://cloud.google.com/about/locations/.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
