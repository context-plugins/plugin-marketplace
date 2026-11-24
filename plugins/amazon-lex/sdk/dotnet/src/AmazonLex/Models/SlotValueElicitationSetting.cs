using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SlotValueElicitationSetting
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultValueSpecification")]
    public SlotDefaultValueSpecification? DefaultValueSpecification { get; init; }

    /// <summary>
    /// Specifies whether the slot is required or optional.
    /// </summary>
    [JsonPropertyName("slotConstraint")]
    public required SlotConstraint SlotConstraint { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promptSpecification")]
    public PromptSpecification? PromptSpecification { get; init; }

    /// <summary>
    /// If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampleUtterances")]
    public IReadOnlyList<SampleUtterance>? SampleUtterances { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("waitAndContinueSpecification")]
    public WaitAndContinueSpecification? WaitAndContinueSpecification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotCaptureSetting")]
    public SlotCaptureSetting? SlotCaptureSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotResolutionSetting")]
    public SlotResolutionSetting? SlotResolutionSetting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
