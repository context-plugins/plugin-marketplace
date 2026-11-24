using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record JobTitleLushaApiDocumentationEnrichmentApi
{
    [JsonPropertyName("seniority")]
    public required string Seniority { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("departments")]
    public required IReadOnlyList<string> Departments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
