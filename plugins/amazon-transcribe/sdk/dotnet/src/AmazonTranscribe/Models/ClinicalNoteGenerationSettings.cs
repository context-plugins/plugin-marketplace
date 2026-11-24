using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record ClinicalNoteGenerationSettings
{
    /// <summary>
    /// Specify one of the following templates to use for the clinical note summary. The default is HISTORY_AND_PHYSICAL. HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan. GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal, Intervention, Response, Progress, and Plan. BIRP: Focuses on the patient's behavioral patterns and responses. Examples of sections include Behavior, Inter
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NoteTemplate")]
    public NoteTemplate? NoteTemplate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
