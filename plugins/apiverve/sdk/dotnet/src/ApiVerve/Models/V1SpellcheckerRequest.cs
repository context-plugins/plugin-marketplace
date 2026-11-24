using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1SpellcheckerRequest
{
    /// <summary>
    /// The text to check the spelling of
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
