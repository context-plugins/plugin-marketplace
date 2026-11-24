using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Core.Validation;
using Givebutter.Core.Validation.Attributes;
using Givebutter.Models.Enums;

namespace Givebutter.Models;

public record Dedication
{
    [JsonPropertyName("type")]
    public required DedicationType Type { get; init; }

    [JsonPropertyName("name")]
    [MaxLength(255)]
    public required string Name { get; init; }

    [JsonPropertyName("recipient_name")]
    [MaxLength(255)]
    public required string? RecipientName { get; init; }

    [JsonPropertyName("recipient_email")]
    [Format(FormatKind.Email)]
    public required string? RecipientEmail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
