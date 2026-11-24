using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Attachment
{
    [JsonPropertyName("uploadId")]
    [MinLength(1)]
    public required string UploadId { get; init; }

    [JsonPropertyName("type")]
    public required Type1BundleSocialAutomationApi Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
