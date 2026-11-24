using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Message for the array of API Hub Gateway Types.
/// </summary>
public record GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray
{
    /// <summary>
    /// Required. The array of API Hub Gateway Types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gatewayTypes")]
    public IReadOnlyList<GatewayType>? GatewayTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
