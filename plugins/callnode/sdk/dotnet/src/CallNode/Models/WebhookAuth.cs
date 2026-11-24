using System.Text.Json.Serialization;
using CallNode.Core.Models;
using CallNode.Models.Enums;

namespace CallNode.Models;

/// <summary>
/// How CallNode authenticates to your webhook endpoint.
/// </summary>
public record WebhookAuth
{
    [JsonPropertyName("type")]
    public required TypeCallnodeIoOutboundCallsApi Type { get; init; }

    /// <summary>
    /// Header name when <c>type</c> is <c>header</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headerName")]
    public string? HeaderName { get; init; }

    /// <summary>
    /// The secret, token, or <c>user:pass</c> pair, depending on <c>type</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
