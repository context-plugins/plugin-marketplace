using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record ChallengeQuestion
{
    /// <summary>
    /// The exact request to make, method and URL.
    /// </summary>
    [JsonPropertyName("call")]
    public required string Call { get; init; }

    /// <summary>
    /// What to read out of that response, in plain English.
    /// </summary>
    [JsonPropertyName("ask")]
    public required string Ask { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
