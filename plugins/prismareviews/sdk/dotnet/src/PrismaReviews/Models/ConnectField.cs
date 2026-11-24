using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record ConnectField
{
    /// <summary>
    /// Key inside <c>credentials</c>, or <c>listing_url</c> at the top level of the request.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Label for a form.
    /// </summary>
    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("type")]
    public required TypePrismaReviewsPlatformsApi Type { get; init; }

    [JsonPropertyName("required")]
    public required bool Required { get; init; }

    /// <summary>
    /// Example value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("placeholder")]
    public string? Placeholder { get; init; }

    /// <summary>
    /// Where to find the value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("help")]
    public string? Help { get; init; }

    /// <summary>
    /// For textarea fields: the file the value usually comes from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_accept")]
    public string? FileAccept { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
