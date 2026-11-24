using System;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record DisputeAttachmentUpload
{
    /// <summary>
    /// Unique ID of attachment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
