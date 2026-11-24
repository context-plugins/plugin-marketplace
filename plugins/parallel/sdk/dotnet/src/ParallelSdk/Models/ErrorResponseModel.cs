using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Response object used for non-200 status codes.
/// </summary>
public record ErrorResponseModel
{
    /// <summary>
    /// Always 'error'.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "error";

    /// <summary>
    /// Error.
    /// </summary>
    [JsonPropertyName("error")]
    public required Error2 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
