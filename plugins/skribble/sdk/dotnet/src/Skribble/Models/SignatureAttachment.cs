using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record SignatureAttachment
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment_id")]
    public Guid? AttachmentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filename")]
    public string? Filename { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
