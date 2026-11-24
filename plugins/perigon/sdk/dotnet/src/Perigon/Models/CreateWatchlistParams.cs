using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record CreateWatchlistParams
{
    /// <summary>
    /// Unique name for the watchlist within the organization
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Display name for the watchlist
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Description of the watchlist
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// List of people to include in the watchlist
    /// </summary>
    [JsonPropertyName("people")]
    [MinLength(0)]
    [MaxLength(100)]
    public required IReadOnlyList<WatchlistPerson> People { get; init; }

    /// <summary>
    /// List of companies to include in the watchlist
    /// </summary>
    [JsonPropertyName("companies")]
    [MinLength(0)]
    [MaxLength(100)]
    public required IReadOnlyList<WatchlistCompany> Companies { get; init; }

    /// <summary>
    /// Whether the watchlist is visible in the UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visible")]
    public bool? Visible { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
