using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// An error produced while attempting moderation.
/// </summary>
public record ModerationInputError1
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "error";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
