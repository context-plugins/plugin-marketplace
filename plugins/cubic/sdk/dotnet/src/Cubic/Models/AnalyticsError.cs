using System.Text.Json.Serialization;
using Cubic.Core.Models;

namespace Cubic.Models;

public record AnalyticsError
{
    /// <summary>
    /// An explanation of the failure.
    /// </summary>
    [JsonPropertyName("error")]
    public required string Error { get; init; }

    /// <summary>
    /// Optional validation or error details. The shape depends on the failure.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public object? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
