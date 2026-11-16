using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

/// <summary>
/// List of <c>Identity</c> resources.
/// </summary>
public record Embedded12
{
    /// <summary>
    /// An <c>Identity</c> resource represents either a person or business in Finix.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identities")]
    [UniqueItems]
    public IReadOnlyList<Identity>? Identities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
