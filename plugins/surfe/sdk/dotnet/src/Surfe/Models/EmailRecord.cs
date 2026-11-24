using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Core.Validation;
using Surfe.Core.Validation.Attributes;
using Surfe.Models.Enums;

namespace Surfe.Models;

public record EmailRecord
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validationStatus")]
    public string? ValidationStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
