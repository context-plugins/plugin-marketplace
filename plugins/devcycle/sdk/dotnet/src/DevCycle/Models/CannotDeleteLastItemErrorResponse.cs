using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record CannotDeleteLastItemErrorResponse
{
    /// <summary>
    /// Response status code
    /// </summary>
    [JsonPropertyName("statusCode")]
    public required double StatusCode { get; init; }

    /// <summary>
    /// Error details
    /// </summary>
    [JsonPropertyName("message")]
    public required object Message { get; init; }

    /// <summary>
    /// Error type
    /// </summary>
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
