using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Response for integration categories.
/// </summary>
public record IntegrationCategoryResponse
{
    [JsonPropertyName("categories")]
    public required IReadOnlyList<string> Categories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
