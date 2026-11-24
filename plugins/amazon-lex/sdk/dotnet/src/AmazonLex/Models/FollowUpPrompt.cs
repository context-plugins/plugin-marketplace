using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record FollowUpPrompt
{
    [JsonPropertyName("prompt")]
    public required Prompt Prompt { get; init; }

    [JsonPropertyName("rejectionStatement")]
    public required Statement RejectionStatement { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
