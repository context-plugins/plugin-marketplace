using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record CreateSealResponse
{
    /// <summary>
    /// Generated document ID
    /// </summary>
    [JsonPropertyName("document_id")]
    public required Guid DocumentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
