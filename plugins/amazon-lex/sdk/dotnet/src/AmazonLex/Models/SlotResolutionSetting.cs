using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotResolutionSetting
{
    /// <summary>
    /// Specifies whether assisted slot resolution is turned on for the slot or not. If the value is EnhancedFallback, assisted slot resolution is activated when Amazon Lex V2 defaults to the AMAZON.FallbackIntent. If the value is Default, assisted slot resolution is turned off.
    /// </summary>
    [JsonPropertyName("slotResolutionStrategy")]
    public required SlotResolutionStrategy SlotResolutionStrategy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
