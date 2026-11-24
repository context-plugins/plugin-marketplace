using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Moves an API Proxy to a different Space.
/// </summary>
public record GoogleCloudApigeeV1MoveApiProxyRequest
{
    /// <summary>
    /// Optional. Resource ID of the space to move the proxy to. If unspecified, the proxy will be moved to the organization level.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("space")]
    public string? Space { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
