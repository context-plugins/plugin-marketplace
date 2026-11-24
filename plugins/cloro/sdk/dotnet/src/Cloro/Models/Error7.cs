using System;
using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record Error7
{
    [JsonPropertyName("code")]
    public string Code { get; } = "QUEUE_LIMIT_EXCEEDED";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public Details2? Details { get; init; }

    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
