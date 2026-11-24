using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Required. The config for the input content.
/// </summary>
public record DatasetInputConfig2
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
