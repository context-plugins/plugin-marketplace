using System.Text.Json.Serialization;
using AppstoreSpy.Core.Models;

namespace AppstoreSpy.Models;

public record PlayReview
{
    /// <summary>
    /// Review ID
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Review language
    /// </summary>
    [JsonPropertyName("lang")]
    public required string Lang { get; init; }

    /// <summary>
    /// ID of the review author
    /// </summary>
    [JsonPropertyName("author_id")]
    public required string AuthorId { get; init; }

    /// <summary>
    /// Name of the review author
    /// </summary>
    [JsonPropertyName("author_name")]
    public required string AuthorName { get; init; }

    /// <summary>
    /// Image URL of the review author
    /// </summary>
    [JsonPropertyName("author_image")]
    public required string AuthorImage { get; init; }

    /// <summary>
    /// App version
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// Creation date
    /// </summary>
    [JsonPropertyName("created")]
    public required string Created { get; init; }

    /// <summary>
    /// App rating
    /// </summary>
    [JsonPropertyName("stars")]
    public required int Stars { get; init; }

    /// <summary>
    /// Review likes
    /// </summary>
    [JsonPropertyName("likes")]
    public required int Likes { get; init; }

    /// <summary>
    /// Review text
    /// </summary>
    [JsonPropertyName("comment")]
    public required string Comment { get; init; }

    /// <summary>
    /// Reply text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reply")]
    public string? Reply { get; init; }

    /// <summary>
    /// Reply date
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replied")]
    public string? Replied { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
