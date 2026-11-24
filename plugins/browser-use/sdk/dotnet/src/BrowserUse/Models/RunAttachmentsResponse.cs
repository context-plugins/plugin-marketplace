using System.Collections.Generic;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

public record RunAttachmentsResponse
{
    [JsonPropertyName("attachments")]
    public required IReadOnlyList<RunAttachment> Attachments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
