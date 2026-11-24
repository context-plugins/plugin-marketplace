using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record CreateStateMachineAliasInput
{
    /// <summary>
    /// A description for the state machine alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The name of the state machine alias. To avoid conflict with version ARNs, don't use an integer in the name of the alias.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The routing configuration of a state machine alias. The routing configuration shifts execution traffic between two state machine versions. routingConfiguration contains an array of RoutingConfig objects that specify up to two state machine versions. Step Functions then randomly choses which version to run an execution with based on the weight assigned to each RoutingConfig.
    /// </summary>
    [JsonPropertyName("routingConfiguration")]
    public required IReadOnlyList<RoutingConfigurationListItem> RoutingConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
