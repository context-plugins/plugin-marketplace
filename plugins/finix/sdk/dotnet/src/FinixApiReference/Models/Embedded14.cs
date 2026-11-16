using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Models;

public record Embedded14
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifications")]
    [UniqueItems]
    public IReadOnlyList<MerchantVerification>? Verifications { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
