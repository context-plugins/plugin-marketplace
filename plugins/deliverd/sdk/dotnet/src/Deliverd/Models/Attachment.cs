using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record Attachment
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("kind")]
    public required KindDeliverdDevReportsApi Kind { get; init; }

    [JsonPropertyName("contentType")]
    public required string ContentType { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
