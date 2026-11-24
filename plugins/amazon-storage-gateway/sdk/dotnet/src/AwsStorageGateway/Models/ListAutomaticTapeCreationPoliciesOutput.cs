using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListAutomaticTapeCreationPoliciesOutput
{
    /// <summary>
    /// Gets a listing of information about the gateway's automatic tape creation policies, including the automatic tape creation rules and the gateway that is using the policies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AutomaticTapeCreationPolicyInfos")]
    public IReadOnlyList<AutomaticTapeCreationPolicyInfo>? AutomaticTapeCreationPolicyInfos { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
