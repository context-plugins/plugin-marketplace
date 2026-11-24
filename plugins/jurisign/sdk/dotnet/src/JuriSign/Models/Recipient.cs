using System.Text.Json.Serialization;
using JuriSign.Core.Models;
using JuriSign.Core.Validation;
using JuriSign.Core.Validation.Attributes;

namespace JuriSign.Models;

/// <summary>
/// Extra keys are accepted and become available as {{merge fields}} in the bulk template.
/// </summary>
public record Recipient
{
    [JsonPropertyName("nom")]
    public required string Nom { get; init; }

    [JsonPropertyName("prenom")]
    public required string Prenom { get; init; }

    [JsonPropertyName("email")]
    [Format(FormatKind.Email)]
    public required string Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("telephone")]
    public string? Telephone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adresse")]
    public string? Adresse { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
