using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record LibraryList
{
    [JsonPropertyName("libraries")]
    public required IReadOnlyList<Library> Libraries { get; init; }

    [JsonPropertyName("total")]
    public required long Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
