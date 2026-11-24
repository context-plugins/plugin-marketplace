using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record UriValue1
{
    [JsonPropertyName("uri")]
    [MinLength(1)]
    public required string Uri { get; init; }
}
