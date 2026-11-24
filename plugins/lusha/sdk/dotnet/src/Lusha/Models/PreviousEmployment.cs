using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record PreviousEmployment
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    public CompanyLushaApiDocumentationEnrichApi? Company { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jobTitle")]
    public JobTitle? JobTitle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
