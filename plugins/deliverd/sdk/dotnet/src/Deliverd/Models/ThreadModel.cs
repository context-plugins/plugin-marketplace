using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ThreadModel
{
    [JsonPropertyName("threadId")]
    public required string ThreadId { get; init; }

    [JsonPropertyName("reportId")]
    public required string ReportId { get; init; }

    [JsonPropertyName("reportTitle")]
    public required string ReportTitle { get; init; }

    [JsonPropertyName("reportSlug")]
    public required string ReportSlug { get; init; }

    /// <summary>
    /// Who owns the report — filter on it to find your own
    /// </summary>
    [JsonPropertyName("reportOwnerId")]
    public required string? ReportOwnerId { get; init; }

    [JsonPropertyName("quote")]
    public required string? Quote { get; init; }

    [JsonPropertyName("author")]
    public required string Author { get; init; }

    [JsonPropertyName("authorType")]
    public required string AuthorType { get; init; }

    [JsonPropertyName("messages")]
    public required double Messages { get; init; }

    [JsonPropertyName("lastActivityAt")]
    public required string LastActivityAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
