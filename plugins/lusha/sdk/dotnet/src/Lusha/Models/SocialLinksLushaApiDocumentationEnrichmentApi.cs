using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record SocialLinksLushaApiDocumentationEnrichmentApi
{
    [JsonPropertyName("linkedin")]
    public required string Linkedin { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xUrl")]
    public string? XUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
