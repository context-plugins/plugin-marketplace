using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateAutomaticTapeCreationPolicyInput
{
    /// <summary>
    /// An automatic tape creation policy consists of a list of automatic tape creation rules. The rules determine when and how to automatically create new tapes.
    /// </summary>
    [JsonPropertyName("AutomaticTapeCreationRules")]
    public required IReadOnlyList<AutomaticTapeCreationRule> AutomaticTapeCreationRules { get; init; }

    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
