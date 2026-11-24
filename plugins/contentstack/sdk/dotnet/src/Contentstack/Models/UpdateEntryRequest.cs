using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Parameters for updating an entry.
/// </summary>
public record UpdateEntryRequest
{
    /// <summary>
    /// Updated field values for the entry.
    /// </summary>
    [JsonPropertyName("entry")]
    public required object Entry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
