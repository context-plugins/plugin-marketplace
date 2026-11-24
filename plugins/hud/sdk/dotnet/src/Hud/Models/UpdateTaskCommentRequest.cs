using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record UpdateTaskCommentRequest
{
    [JsonPropertyName("body")]
    public required string Body { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
