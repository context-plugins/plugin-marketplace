using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Links
{
    /// <summary>
    /// Public URL of auth link.
    /// </summary>
    [JsonPropertyName("public")]
    public required string Public { get; init; }

    /// <summary>
    /// URL of the resource
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
