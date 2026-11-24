using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Data9
{
    /// <summary>
    /// SSL inspection configuration for a policy.
    /// </summary>
    [JsonPropertyName("sslInspection")]
    public required SslInspectionResponse SslInspection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
