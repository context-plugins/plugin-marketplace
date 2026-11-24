using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BuildtimeSettings
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("descriptiveBotBuilder")]
    public DescriptiveBotBuilderSpecification? DescriptiveBotBuilder { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampleUtteranceGeneration")]
    public SampleUtteranceGenerationSpecification? SampleUtteranceGeneration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
