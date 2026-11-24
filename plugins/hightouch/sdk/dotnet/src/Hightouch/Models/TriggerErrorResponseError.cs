using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// Body returned on a request-level failure (400/404/409/429) so the caller
/// knows why the request was rejected.
/// </summary>
public record TriggerErrorResponseError
{
    /// <summary>
    /// Human-readable description of why the request failed.
    /// </summary>
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
