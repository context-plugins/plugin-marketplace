using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1PhishingcheckRequest
{
    /// <summary>
    /// The domain to check (e.g., example.com)
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
