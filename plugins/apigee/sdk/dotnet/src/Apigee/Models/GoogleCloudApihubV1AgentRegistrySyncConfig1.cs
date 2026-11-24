using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. The configuration for syncing MCP data in the API Hub instance to the Agent Registry.
/// </summary>
public record GoogleCloudApihubV1AgentRegistrySyncConfig1
{
    /// <summary>
    /// Optional. If true, the MCP data sync to the Agent Registry will be disabled. The default value is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disabled")]
    public bool? Disabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
