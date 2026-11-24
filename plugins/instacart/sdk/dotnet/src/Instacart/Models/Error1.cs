using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record Error1
{
    /// <summary>
    /// The index of the record with the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("index")]
    public int? Index { get; init; }

    /// <summary>
    /// The error message describing the issue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
