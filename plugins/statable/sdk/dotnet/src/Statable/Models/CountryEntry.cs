using System;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record CountryEntry
{
    /// <summary>
    /// ISO 3166-1 alpha-2.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// When the country was added to the list.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
