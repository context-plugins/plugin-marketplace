using System;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record FormDetail
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// The published FormSchema (see @usefillo/core).
    /// </summary>
    [JsonPropertyName("schema")]
    public required object Schema { get; init; }

    /// <summary>
    /// The published FormSettings.
    /// </summary>
    [JsonPropertyName("settings")]
    public required object Settings { get; init; }

    [JsonPropertyName("hasDraft")]
    public required bool HasDraft { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
