using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Cubic.Models;

public record Error1
{
    /// <summary>
    /// Stable error code. Branch on this, not on the message.
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Whether the same request can succeed if you send it again.
    /// </summary>
    [JsonPropertyName("retriable")]
    public required bool Retriable { get; init; }

    /// <summary>
    /// Quote this ID when you contact support.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("correlationId")]
    public string? CorrelationId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public IReadOnlyList<Detail>? Details { get; init; }
}
