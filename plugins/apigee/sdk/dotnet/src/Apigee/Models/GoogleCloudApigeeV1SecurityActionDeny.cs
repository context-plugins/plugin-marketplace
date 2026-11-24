using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Message that should be set in case of a Deny Action.
/// </summary>
public record GoogleCloudApigeeV1SecurityActionDeny
{
    /// <summary>
    /// Optional. The HTTP response code if the Action = DENY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseCode")]
    public int? ResponseCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
