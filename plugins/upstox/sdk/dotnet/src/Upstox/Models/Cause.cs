using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;

namespace Upstox.Models;

public record Cause
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stackTrace")]
    public IReadOnlyList<StackTrace>? StackTrace { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localizedMessage")]
    public string? LocalizedMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
