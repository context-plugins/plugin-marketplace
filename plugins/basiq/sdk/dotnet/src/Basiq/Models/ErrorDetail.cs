using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record ErrorDetail
{
    /// <summary>
    /// Type of data object
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "error";

    /// <summary>
    /// Error code identifier
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    /// <summary>
    /// Human-readable error title
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Detailed error message
    /// </summary>
    [JsonPropertyName("detail")]
    public required string Detail { get; init; }

    /// <summary>
    /// Source of the error (optional)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public SourceInsightsApi? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
