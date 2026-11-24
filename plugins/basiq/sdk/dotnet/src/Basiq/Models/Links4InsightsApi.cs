using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

public record Links4InsightsApi
{
    /// <summary>
    /// Link to current page
    /// </summary>
    [JsonPropertyName("self")]
    [Format(FormatKind.Uri)]
    public required string Self { get; init; }

    /// <summary>
    /// Link to next page (if available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next")]
    [Format(FormatKind.Uri)]
    public string? Next { get; init; }

    /// <summary>
    /// Link to previous page (if available)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prev")]
    [Format(FormatKind.Uri)]
    public string? Prev { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
