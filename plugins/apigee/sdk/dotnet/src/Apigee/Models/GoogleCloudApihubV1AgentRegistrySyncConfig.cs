using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The configuration for Agent Registry sync.
/// </summary>
public record GoogleCloudApihubV1AgentRegistrySyncConfig
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
