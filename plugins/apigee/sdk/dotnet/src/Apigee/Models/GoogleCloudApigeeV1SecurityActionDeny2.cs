using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Deny a request through if it matches this SecurityAction.
/// </summary>
public record GoogleCloudApigeeV1SecurityActionDeny2
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
