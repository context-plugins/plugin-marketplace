using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Models.AnyOf;
using Fellow.Models.Enums;

namespace Fellow.Models;

public record RecapTemplateSection
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("type")]
    public required ApiRecapTemplateSectionType Type { get; init; }

    [JsonPropertyName("content")]
    public required Content Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
