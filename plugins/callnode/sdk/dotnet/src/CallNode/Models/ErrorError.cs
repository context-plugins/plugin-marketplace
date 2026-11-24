using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record ErrorError
{
    /// <summary>
    /// Stable machine-readable code, e.g. <c>invalid_from_number</c>.
    /// </summary>
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    /// <summary>
    /// Human-readable explanation.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Whether retrying the identical request could succeed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryable")]
    public bool? Retryable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
