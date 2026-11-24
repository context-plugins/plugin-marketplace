using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribeSettings
{
    /// <summary>
    /// Enables speaker partitioning (diarization) in your Medical Scribe output. Speaker partitioning labels the speech from individual speakers in your media file. If you enable ShowSpeakerLabels in your request, you must also include MaxSpeakerLabels. For more information, see Partitioning speakers (diarization).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ShowSpeakerLabels")]
    public bool? ShowSpeakerLabels { get; init; }

    /// <summary>
    /// Specify the maximum number of speakers you want to partition in your media. Note that if your media contains more speakers than the specified number, multiple speakers are treated as a single speaker. If you specify the MaxSpeakerLabels field, you must set the ShowSpeakerLabels field to true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxSpeakerLabels")]
    public int? MaxSpeakerLabels { get; init; }

    /// <summary>
    /// Enables channel identification in multi-channel audio. Channel identification transcribes the audio on each channel independently, then appends the output for each channel into one transcript. For more information, see Transcribing multi-channel audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelIdentification")]
    public bool? ChannelIdentification { get; init; }

    /// <summary>
    /// The name of the custom vocabulary you want to include in your Medical Scribe request. Custom vocabulary names are case sensitive.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// The name of the custom vocabulary filter you want to include in your Medical Scribe request. Custom vocabulary filter names are case sensitive. Note that if you include VocabularyFilterName in your request, you must also include VocabularyFilterMethod.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterName")]
    public string? VocabularyFilterName { get; init; }

    /// <summary>
    /// Specify how you want your custom vocabulary filter applied to your transcript. To replace words with ***, choose mask. To delete words, choose remove. To flag words without changing them, choose tag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMethod")]
    public VocabularyFilterMethod? VocabularyFilterMethod { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClinicalNoteGenerationSettings")]
    public ClinicalNoteGenerationSettings? ClinicalNoteGenerationSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
