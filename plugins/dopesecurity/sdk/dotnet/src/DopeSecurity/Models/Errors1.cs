using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record Errors1
{
    /// <summary>
    /// Error message
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Optional additional details regarding the error
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public object? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
