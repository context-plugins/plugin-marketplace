using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DeleteInterconnectRequest
{
    /// <summary>
    /// The ID of the interconnect.
    /// </summary>
    [JsonPropertyName("interconnectId")]
    public required string InterconnectId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
