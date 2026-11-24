using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Extract error details.
/// </summary>
public record ExtractError
{
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Error type.
    /// </summary>
    [JsonPropertyName("error_type")]
    public required string ErrorType { get; init; }

    /// <summary>
    /// HTTP status code, if available.
    /// </summary>
    [JsonPropertyName("http_status_code")]
    public required HttpStatusCode HttpStatusCode { get; init; }

    /// <summary>
    /// Content returned for http client or server errors, if any.
    /// </summary>
    [JsonPropertyName("content")]
    public required ContentParallelAiExtractApi Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
