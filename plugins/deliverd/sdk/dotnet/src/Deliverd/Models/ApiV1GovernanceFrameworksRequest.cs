using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1GovernanceFrameworksRequest
{
    /// <summary>
    /// custom_ followed by lower case letters, digits and underscores
    /// </summary>
    [JsonPropertyName("key")]
    [RegularExpression("^custom_[a-z0-9_]{1,52}$")]
    public required string Key { get; init; }

    /// <summary>
    /// e.g. 1.0 or 2026.10. A change to a published framework is a new version
    /// </summary>
    [JsonPropertyName("version")]
    [RegularExpression("^[0-9A-Za-z][0-9A-Za-z._-]{0,31}$")]
    public required string Version { get; init; }

    [JsonPropertyName("name")]
    [StringLength(200, MinimumLength = 1)]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    [MaxLength(2000)]
    public string? Summary { get; init; }

    /// <summary>
    /// Where it applies, e.g. EU, UK. Empty: wherever it is adopted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jurisdictions")]
    [MaxLength(30)]
    public IReadOnlyList<string>? Jurisdictions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effectiveFrom")]
    public DateTimeOffset? EffectiveFrom { get; init; }

    [JsonPropertyName("requirements")]
    [MinLength(1)]
    [MaxLength(200)]
    public required IReadOnlyList<Requirement> Requirements { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
