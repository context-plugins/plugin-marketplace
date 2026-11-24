using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record PollChoice
{
    /// <summary>
    /// The unique identifier of the poll choice.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The text label for this choice.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
