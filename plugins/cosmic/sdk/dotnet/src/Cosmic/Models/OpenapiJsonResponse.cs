using System.Text.Json.Serialization;
using Cosmic.Core.Models;

namespace Cosmic.Models;

/// <summary>
/// An OpenAPI 3.1 document.
/// </summary>
public record OpenapiJsonResponse
{
    [JsonPropertyName("openapi")]
    public required string Openapi { get; init; }

    [JsonPropertyName("info")]
    public required object Info { get; init; }

    [JsonPropertyName("paths")]
    public required object Paths { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
