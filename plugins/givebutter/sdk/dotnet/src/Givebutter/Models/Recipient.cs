using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record Recipient
{
    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonPropertyName("email")]
    public required string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
