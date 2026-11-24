using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CreateLanguageModelResponse
{
    /// <summary>
    /// The language code you selected for your custom language model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode1AmazonTranscribeServiceLanguageModelApi? LanguageCode { get; init; }

    /// <summary>
    /// The Amazon Transcribe standard language model, or base model, you specified when creating your custom language model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BaseModelName")]
    public BaseModelName1? BaseModelName { get; init; }

    /// <summary>
    /// The name of your custom language model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelName")]
    public string? ModelName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputDataConfig")]
    public InputDataConfig? InputDataConfig { get; init; }

    /// <summary>
    /// The status of your custom language model. When the status displays as COMPLETED, your model is ready to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelStatus")]
    public ModelStatus? ModelStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
