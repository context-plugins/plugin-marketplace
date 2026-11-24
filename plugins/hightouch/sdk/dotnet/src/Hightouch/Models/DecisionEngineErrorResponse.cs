using System.Text.Json.Serialization;

namespace Hightouch.Models;

public record DecisionEngineErrorResponse
{
    /// <summary>
    /// Why the request failed.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }
}
