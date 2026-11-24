using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotValueSelectionSetting
{
    /// <summary>
    /// Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values: ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to the slot value. TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned. If you don't specify the valueSelectionStrategy, the default is ORIGINAL_VALUE.
    /// </summary>
    [JsonPropertyName("resolutionStrategy")]
    public required ResolutionStrategy ResolutionStrategy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regexFilter")]
    public SlotValueRegexFilter? RegexFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("advancedRecognitionSetting")]
    public AdvancedRecognitionSetting? AdvancedRecognitionSetting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
