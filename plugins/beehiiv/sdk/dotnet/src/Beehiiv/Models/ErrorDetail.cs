using System.Text.Json.Serialization;
using Beehiiv.Core.Models;

namespace Beehiiv.Models;

public record ErrorDetail
{
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
