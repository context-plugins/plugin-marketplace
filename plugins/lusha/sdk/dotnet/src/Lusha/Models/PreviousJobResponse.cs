using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record PreviousJobResponse
{
    [JsonPropertyName("jobTitle")]
    public required JobTitleLushaApiDocumentationEnrichmentApi JobTitle { get; init; }

    [JsonPropertyName("company")]
    public required CompanyLushaApiDocumentationEnrichmentApi Company { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
