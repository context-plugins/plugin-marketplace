using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Parameters for creating a new entry.
/// </summary>
public record CreateEntryRequest
{
    /// <summary>
    /// Entry field values conforming to the content type schema.
    /// </summary>
    [JsonPropertyName("entry")]
    public required object Entry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
