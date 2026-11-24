using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

public record Recap
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("is_active")]
    public required bool IsActive { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("template_creator")]
    public required string TemplateCreator { get; init; }

    [JsonPropertyName("sections")]
    public required IReadOnlyList<RecapTemplateSection> Sections { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
