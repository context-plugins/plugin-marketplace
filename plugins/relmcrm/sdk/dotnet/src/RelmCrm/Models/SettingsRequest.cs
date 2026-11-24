using System.Text.Json.Serialization;
using RelmCrm.Core.Models;

namespace RelmCrm.Models;

public record SettingsRequest
{
    /// <summary>
    /// USD cap on metered overage; 0 = never any overage, null = unlimited.
    /// </summary>
    [JsonPropertyName("overage_cap_usd")]
    public required double? OverageCapUsd { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
