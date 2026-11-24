using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

public record ContactLushaSignalsApi
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("social_link")]
    [Format(FormatKind.Uri)]
    public string? SocialLink { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("full_name")]
    public string? FullName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public IReadOnlyList<CompanyLushaSignalsApi>? Companies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
