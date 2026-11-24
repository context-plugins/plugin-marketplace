using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Sport
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("group")]
    public required string Group { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    [JsonPropertyName("has_outrights")]
    public required bool HasOutrights { get; init; }

    [JsonPropertyName("regions")]
    public required IReadOnlyList<string> Regions { get; init; }

    /// <summary>
    /// Market keys seen under it on the matched boards.
    /// </summary>
    [JsonPropertyName("markets")]
    public required IReadOnlyList<string> Markets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
