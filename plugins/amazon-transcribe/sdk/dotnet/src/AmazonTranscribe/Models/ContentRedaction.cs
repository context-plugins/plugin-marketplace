using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record ContentRedaction
{
    /// <summary>
    /// Specify the category of information you want to redact; PII (personally identifiable information) is the only valid value. You can use PiiEntityTypes to choose which types of PII you want to redact. If you do not include PiiEntityTypes in your request, all PII is redacted.
    /// </summary>
    [JsonPropertyName("RedactionType")]
    public string RedactionType { get; } = "PII";

    /// <summary>
    /// Specify if you want only a redacted transcript, or if you want a redacted and an unredacted transcript. When you choose redacted Amazon Transcribe creates only a redacted transcript. When you choose redacted_and_unredacted Amazon Transcribe creates a redacted and an unredacted transcript (as two separate files).
    /// </summary>
    [JsonPropertyName("RedactionOutput")]
    public required RedactionOutput RedactionOutput { get; init; }

    /// <summary>
    /// Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select ALL. If you do not include PiiEntityTypes in your request, all PII is redacted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PiiEntityTypes")]
    public IReadOnlyList<PiiEntityType>? PiiEntityTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
