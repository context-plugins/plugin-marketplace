using System.Text.Json.Serialization;
using MrScraper.Core.Models;

namespace MrScraper.Models;

public record Storage503Error1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
