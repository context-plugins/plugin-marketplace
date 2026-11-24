using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Sent
{
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    /// <summary>
    /// The mail provider accepted it. Not that it was read
    /// </summary>
    [JsonPropertyName("delivered")]
    public required bool Delivered { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
