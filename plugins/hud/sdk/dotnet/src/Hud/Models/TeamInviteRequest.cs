using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.Enums;

namespace Hud.Models;

public record TeamInviteRequest
{
    [JsonPropertyName("emails")]
    [MinLength(1)]
    [MaxLength(30)]
    public required IReadOnlyList<string> Emails { get; init; }

    [JsonPropertyName("role")]
    public required Role Role { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
