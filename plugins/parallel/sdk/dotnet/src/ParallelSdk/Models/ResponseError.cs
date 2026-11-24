using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Details of a failed response.
/// </summary>
public record ResponseError
{
    /// <summary>
    /// Error code; currently always "server_error".
    /// </summary>
    [JsonPropertyName("code")]
    public string Code { get; } = "server_error";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
