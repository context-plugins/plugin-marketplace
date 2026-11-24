using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;

namespace JuriSign.Models;

public record Downloads
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signed_pdf")]
    [Format(FormatKind.Uri)]
    public string? SignedPdf { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proof")]
    [Format(FormatKind.Uri)]
    public string? Proof { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
