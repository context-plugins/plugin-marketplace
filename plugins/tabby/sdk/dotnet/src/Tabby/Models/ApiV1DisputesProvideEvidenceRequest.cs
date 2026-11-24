using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record ApiV1DisputesProvideEvidenceRequest
{
    /// <summary>
    /// Text content of the evidence being provided.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Array of attachment IDs to include as evidence. IDs can be received via <c>upload attachment</c> endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment_ids")]
    public IReadOnlyList<Guid>? AttachmentIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
