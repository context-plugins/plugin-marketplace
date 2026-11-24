using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// The metadata sent with the approval or rejection
/// </summary>
public record ReviewMetadata
{
    [JsonPropertyName("extId")]
    public required string ExtId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
