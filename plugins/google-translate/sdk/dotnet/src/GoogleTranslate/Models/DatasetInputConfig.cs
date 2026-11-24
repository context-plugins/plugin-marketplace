using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Input configuration for datasets.
/// </summary>
public record DatasetInputConfig
{
    /// <summary>
    /// Files containing the sentence pairs to be imported to the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputFiles")]
    public IReadOnlyList<InputFile>? InputFiles { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
