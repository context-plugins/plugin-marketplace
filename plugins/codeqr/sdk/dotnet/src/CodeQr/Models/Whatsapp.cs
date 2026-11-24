using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

/// <summary>
/// The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message.
/// </summary>
public record Whatsapp
{
    [JsonPropertyName("number")]
    [RegularExpression("^[1-9]\\d{7,14}$")]
    public required string Number { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    [MaxLength(1000)]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
