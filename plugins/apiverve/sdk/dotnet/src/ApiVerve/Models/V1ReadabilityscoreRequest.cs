using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1ReadabilityscoreRequest
{
    /// <summary>
    /// The text to calculate the readability score of
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
