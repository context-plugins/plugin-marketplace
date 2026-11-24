using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ApiV1CallsTransferRequest
{
    /// <summary>
    /// E.164 number, or a <c>sip:</c> URI to your own endpoint. SIP
    /// hosts must be public — private and infrastructure ranges
    /// are rejected.
    /// </summary>
    [JsonPropertyName("destination")]
    public required string Destination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
