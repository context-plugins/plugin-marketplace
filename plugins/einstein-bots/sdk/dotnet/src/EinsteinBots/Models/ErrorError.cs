using System.Text.Json.Serialization;
using EinsteinBots.Core.Models;

namespace EinsteinBots.Models;

public record ErrorError
{
    /// <summary>
    /// HTTP status.
    /// </summary>
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    /// <summary>
    /// Request path.
    /// </summary>
    [JsonPropertyName("path")]
    public required string Path { get; init; }

    /// <summary>
    /// Request ID. A UUID in string format to help with request tracking.
    /// </summary>
    [JsonPropertyName("requestId")]
    public required string RequestId { get; init; }

    /// <summary>
    /// Error class name.
    /// </summary>
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    /// <summary>
    /// Exception message.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Unix timestamp.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required long Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
