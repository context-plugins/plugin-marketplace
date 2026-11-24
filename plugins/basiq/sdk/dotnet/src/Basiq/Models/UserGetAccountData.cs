using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Object containing account data.
/// </summary>
public record UserGetAccountData
{
    /// <summary>
    /// Always "account".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Account identification.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Link object containing a link to the resource, self reference.
    /// </summary>
    [JsonPropertyName("links")]
    public required ResourceLink Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
