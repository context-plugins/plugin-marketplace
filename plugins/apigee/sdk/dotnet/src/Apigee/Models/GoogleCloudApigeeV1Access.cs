using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1Access
{
    /// <summary>
    /// Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" }
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Set")]
    public GoogleCloudApigeeV1AccessSet? Set { get; init; }

    /// <summary>
    /// Remove action. For example, "Remove" : { "name" : "target.name", "success" : true }
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Remove")]
    public GoogleCloudApigeeV1AccessRemove? Remove { get; init; }

    /// <summary>
    /// Get action. For example, "Get" : { "name" : "target.name", "value" : "default" }
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Get")]
    public GoogleCloudApigeeV1AccessGet? Get { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
