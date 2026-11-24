using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record JournalCreate
{
    [JsonPropertyName("code")]
    [MaxLength(10)]
    public required string Code { get; init; }

    [JsonPropertyName("displayName")]
    [MaxLength(100)]
    public required string DisplayName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templateDisplayName")]
    [MaxLength(100)]
    public string? TemplateDisplayName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
