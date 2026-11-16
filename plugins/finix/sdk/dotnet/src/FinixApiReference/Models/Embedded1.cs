using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

/// <summary>
/// List of <c>Authorization</c> objects.
/// </summary>
public record Embedded1
{
    /// <summary>
    /// <c>Authorization</c> objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizations")]
    [MinLength(0)]
    [UniqueItems]
    public IReadOnlyList<Authorization>? Authorizations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
