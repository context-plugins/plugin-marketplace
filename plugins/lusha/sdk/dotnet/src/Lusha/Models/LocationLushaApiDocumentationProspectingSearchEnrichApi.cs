using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record LocationLushaApiDocumentationProspectingSearchEnrichApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
