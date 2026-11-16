using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Models;

public record Embedded30
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifications")]
    [UniqueItems]
    public IReadOnlyList<Verifications3>? Verifications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
