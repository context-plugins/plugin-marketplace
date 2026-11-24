using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record PublicUserResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
