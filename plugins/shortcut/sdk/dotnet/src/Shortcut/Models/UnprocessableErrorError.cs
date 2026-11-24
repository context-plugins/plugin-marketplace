using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

public record UnprocessableErrorError
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
