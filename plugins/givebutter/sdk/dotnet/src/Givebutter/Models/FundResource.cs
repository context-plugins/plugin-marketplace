using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record FundResource
{
    [JsonPropertyName("id")]
    public required string? Id { get; init; }

    [JsonPropertyName("code")]
    public required string? Code { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("raised")]
    public required double Raised { get; init; }

    [JsonPropertyName("supporters")]
    public required int Supporters { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
