using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The request for sending an AdaptiveMt translation query.
/// </summary>
public record AdaptiveMtTranslateRequest
{
    /// <summary>
    /// Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryConfig")]
    public GlossaryConfig1? GlossaryConfig { get; init; }

    /// <summary>
    /// The format of the source text. Currently only text/plain is supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    /// <summary>
    /// Required. The resource name for the dataset to use for adaptive MT translation. <c>projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataset")]
    public string? Dataset { get; init; }

    /// <summary>
    /// Configuration for caller provided reference sentences.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceSentenceConfig")]
    public ReferenceSentenceConfig1? ReferenceSentenceConfig { get; init; }

    /// <summary>
    /// Required. The content of the input in string format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public IReadOnlyList<string>? Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
