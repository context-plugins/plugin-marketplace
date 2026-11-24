using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record DedupeSessionInvalidErrorError
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
