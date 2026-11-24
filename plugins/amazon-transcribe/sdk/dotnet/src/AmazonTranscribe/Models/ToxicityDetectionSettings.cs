using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record ToxicityDetectionSettings
{
    /// <summary>
    /// If you include ToxicityDetection in your transcription request, you must also include ToxicityCategories. The only accepted value for this parameter is ALL.
    /// </summary>
    [JsonPropertyName("ToxicityCategories")]
    public required IReadOnlyList<ToxicityCategory> ToxicityCategories { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
