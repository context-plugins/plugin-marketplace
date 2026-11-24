using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Core.Validation;
using Fellow.Core.Validation.Attributes;
using Fellow.Models.Enums;
using Fellow.Models.OneOf;

namespace Fellow.Models;

public record RecordingUploadRequest
{
    [JsonPropertyName("url")]
    [MinLength(1)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonPropertyName("title")]
    [MaxLength(255)]
    public required string Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language_code")]
    public TranscriptionLanguage? LanguageCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("media_auth")]
    public MediaAuth? MediaAuth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel_id")]
    public string? ChannelId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_guid")]
    public string? EventGuid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
