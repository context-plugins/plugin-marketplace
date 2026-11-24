using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record HumanLoopConfig
{
    /// <summary>
    /// The name of the human review used for this image. This should be kept unique within a region.
    /// </summary>
    [JsonPropertyName("HumanLoopName")]
    public required string HumanLoopName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the flow definition. You can create a flow definition by using the Amazon Sagemaker CreateFlowDefinition Operation.
    /// </summary>
    [JsonPropertyName("FlowDefinitionArn")]
    public required string FlowDefinitionArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAttributes")]
    public HumanLoopDataAttributes? DataAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
