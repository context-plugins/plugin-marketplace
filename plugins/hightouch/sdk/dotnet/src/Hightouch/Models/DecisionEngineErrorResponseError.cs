using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

public record DecisionEngineErrorResponseError
{
    /// <summary>
    /// Why the request failed.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
