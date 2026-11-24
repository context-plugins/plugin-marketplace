using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record Error
{
    /// <summary>
    /// A human-readable error message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? ErrorValue { get; init; }

    /// <summary>
    /// The HTTP status code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public int? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
