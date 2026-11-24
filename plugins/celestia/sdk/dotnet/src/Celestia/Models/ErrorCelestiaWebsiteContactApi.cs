using System.Text.Json.Serialization;
using Celestia.Core.Models;

namespace Celestia.Models;

public record ErrorCelestiaWebsiteContactApi
{
    /// <summary>
    /// Human-readable error message; retained for form clients.
    /// </summary>
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    /// <summary>
    /// Stable machine-readable error identifier.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Suggested action to resolve the error.
    /// </summary>
    [JsonPropertyName("hint")]
    public required string Hint { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
