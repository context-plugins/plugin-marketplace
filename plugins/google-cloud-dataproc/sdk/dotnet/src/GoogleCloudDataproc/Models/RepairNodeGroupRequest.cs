using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

public record RepairNodeGroupRequest
{
    /// <summary>
    /// Optional. A unique ID used to identify the request. If the server receives two RepairNodeGroupRequest with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Required. Repair action to take on specified resources of the node pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repairAction")]
    public RepairAction? RepairAction { get; init; }

    /// <summary>
    /// Required. Name of instances to be repaired. These instances must belong to specified node pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceNames")]
    public IReadOnlyList<string>? InstanceNames { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
