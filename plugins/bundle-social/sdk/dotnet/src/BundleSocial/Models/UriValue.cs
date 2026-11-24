using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record UriValue
{
    [JsonPropertyName("uri")]
    public required string Uri { get; init; }
}
