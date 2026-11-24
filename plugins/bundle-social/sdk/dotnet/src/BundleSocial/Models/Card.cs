using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.OneOf;

namespace BundleSocial.Models;

public record Card
{
    [JsonPropertyName("id")]
    [StringLength(36, MinimumLength = 1)]
    public required string Id { get; init; }

    [JsonPropertyName("title")]
    [StringLength(80, MinimumLength = 1)]
    public required string Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subtitle")]
    [MaxLength(80)]
    public string? Subtitle { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUploadId")]
    [MinLength(1)]
    public string? ImageUploadId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buttons")]
    [MaxLength(3)]
    public IReadOnlyList<Button3>? Buttons { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
