using System;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Event notification retry attempts information.
/// </summary>
public record EventRetryDto
{
    /// <summary>
    /// Event notification retry attempt number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attemptNumber")]
    public int? AttemptNumber { get; init; }

    /// <summary>
    /// Event notification retry created date and time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// HTTP status code received from the notification URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusCode")]
    public int? StatusCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
