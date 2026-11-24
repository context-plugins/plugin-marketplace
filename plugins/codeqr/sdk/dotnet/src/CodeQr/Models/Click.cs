using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record Click
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("continent")]
    public required string Continent { get; init; }

    [JsonPropertyName("country")]
    public required string Country { get; init; }

    [JsonPropertyName("city")]
    public required string City { get; init; }

    [JsonPropertyName("device")]
    public required string Device { get; init; }

    [JsonPropertyName("browser")]
    public required string Browser { get; init; }

    [JsonPropertyName("os")]
    public required string Os { get; init; }

    [JsonPropertyName("referer")]
    public required string Referer { get; init; }

    [JsonPropertyName("refererUrl")]
    public required string RefererUrl { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("ip")]
    public required string Ip { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
