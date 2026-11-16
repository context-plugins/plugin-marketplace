using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record GenericError
{
    /// <summary>
    /// Total number of errors returned.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// Container for embedded error objects.
    /// </summary>
    [JsonPropertyName("_embedded")]
    public required Embedded Embedded { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
