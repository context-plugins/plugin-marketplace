using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record RoutingConfigurationListItem
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration. If you specify the ARN of a second version, it must belong to the same state machine as the first version.
    /// </summary>
    [JsonPropertyName("stateMachineVersionArn")]
    public required string StateMachineVersionArn { get; init; }

    /// <summary>
    /// The percentage of traffic you want to route to a state machine version. The sum of the weights in the routing configuration must be equal to 100.
    /// </summary>
    [JsonPropertyName("weight")]
    public required int Weight { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
