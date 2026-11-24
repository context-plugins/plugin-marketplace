using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ThreadDeliverdDevReportsApi
{
    [JsonPropertyName("threadId")]
    public required Guid ThreadId { get; init; }

    [JsonPropertyName("status")]
    public required Status13 Status { get; init; }

    [JsonPropertyName("anchorStatus")]
    public required string AnchorStatus { get; init; }

    [JsonPropertyName("createdOnVersion")]
    public required double? CreatedOnVersion { get; init; }

    [JsonPropertyName("currentVersion")]
    public required double? CurrentVersion { get; init; }

    [JsonPropertyName("quote")]
    public required string? Quote { get; init; }

    [JsonPropertyName("context")]
    public required Context Context { get; init; }

    [JsonPropertyName("messages")]
    public required IReadOnlyList<Message> Messages { get; init; }

    [JsonPropertyName("attachments")]
    public required IReadOnlyList<Attachment> Attachments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
