using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudflowV1ConnectionsRequest1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// GCP connection configuration. Server-owned fields (status, deploymentCommand) are excluded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcpConfig")]
    public CloudflowGcpConfigRequest? GcpConfig { get; init; }

    /// <summary>
    /// AWS connection configuration. Server-owned fields (context[].status, context[].nextStackOperation, stackSet) are excluded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsConfig")]
    public CloudflowAwsConfigRequest? AwsConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("collaborators")]
    public IReadOnlyList<CloudflowCollaborator>? Collaborators { get; init; }

    /// <summary>
    /// Set to false to disable the connection, true to re-enable it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
