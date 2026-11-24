using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessMediaRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("uploadId")]
    public required string UploadId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public Category? Category { get; init; } = Category.Additional;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(2000)]
    public string? Description { get; init; }
}
