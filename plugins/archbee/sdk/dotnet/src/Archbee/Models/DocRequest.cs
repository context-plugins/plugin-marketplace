using System.Text.Json.Serialization;
using Archbee.Core.Models;

namespace Archbee.Models;

public record DocRequest
{
    /// <summary>
    /// Document id that will be permanently deleted.
    /// </summary>
    [JsonPropertyName("docId")]
    public required string DocId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
