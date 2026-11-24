using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A trained translation model.
/// </summary>
public record Model
{
    /// <summary>
    /// Output only. The BCP-47 language code of the source language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    /// <summary>
    /// Output only. Timestamp when this model was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. The BCP-47 language code of the target language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCode")]
    public string? TargetLanguageCode { get; init; }

    /// <summary>
    /// Output only. Number of examples (sentence pairs) used to train the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trainExampleCount")]
    public int? TrainExampleCount { get; init; }

    /// <summary>
    /// Output only. Number of examples (sentence pairs) used to test the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testExampleCount")]
    public int? TestExampleCount { get; init; }

    /// <summary>
    /// Required. The dataset from which the model is trained, in form of <c>projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataset")]
    public string? Dataset { get; init; }

    /// <summary>
    /// The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. Timestamp when the model resource was created, which is also when the training started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. Number of examples (sentence pairs) used to validate the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validateExampleCount")]
    public int? ValidateExampleCount { get; init; }

    /// <summary>
    /// The resource name of the model, in form of <c>projects/{project-number-or-id}/locations/{location_id}/models/{model_id}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
