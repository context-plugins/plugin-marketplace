using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// ResourceLinks contains resource links
/// </summary>
public record Links1
{
    /// <summary>
    /// URL to resource itself
    /// </summary>
    [JsonPropertyName("self")]
    public required string Self { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
