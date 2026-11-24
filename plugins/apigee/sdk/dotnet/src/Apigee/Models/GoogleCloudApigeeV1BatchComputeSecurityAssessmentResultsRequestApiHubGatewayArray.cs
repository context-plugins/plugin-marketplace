using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Message for the array of API Hub Gateways.
/// </summary>
public record GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray
{
    /// <summary>
    /// Required. The array of API Hub Gateway IDs. Format: <c>projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gateways")]
    public IReadOnlyList<string>? Gateways { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
