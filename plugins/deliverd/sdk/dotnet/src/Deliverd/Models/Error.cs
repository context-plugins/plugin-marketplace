using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Error
{
    [JsonPropertyName("code")]
    public string Code { get; } = "agents_stopped";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
