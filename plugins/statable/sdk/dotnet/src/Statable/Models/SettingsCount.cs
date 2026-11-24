using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record SettingsCount
{
    [JsonPropertyName("site_id")]
    public required long SiteId { get; init; }

    /// <summary>
    /// Entries stored after the replace.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
