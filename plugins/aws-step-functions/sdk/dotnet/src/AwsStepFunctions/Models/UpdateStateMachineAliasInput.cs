using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record UpdateStateMachineAliasInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine alias.
    /// </summary>
    [JsonPropertyName("stateMachineAliasArn")]
    public required string StateMachineAliasArn { get; init; }

    /// <summary>
    /// A description of the state machine alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The routing configuration of the state machine alias. An array of RoutingConfig objects that specifies up to two state machine versions that the alias starts executions for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routingConfiguration")]
    public IReadOnlyList<RoutingConfigurationListItem>? RoutingConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
