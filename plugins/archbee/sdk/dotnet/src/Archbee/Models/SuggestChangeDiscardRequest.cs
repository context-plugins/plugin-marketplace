using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record SuggestChangeDiscardRequest
{
    /// <summary>
    /// The ID of the suggestion document to discard. Must start with 'SUGGEST-'.
    /// </summary>
    [JsonPropertyName("docId")]
    public required string DocId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
