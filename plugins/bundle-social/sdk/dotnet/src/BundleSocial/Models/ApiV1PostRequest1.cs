using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1PostRequest1
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("title")]
    [MinLength(1)]
    public required string Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceKey")]
    [StringLength(128, MinimumLength = 1)]
    public string? ReferenceKey { get; init; }

    [JsonPropertyName("postDate")]
    public required string PostDate { get; init; }

    [JsonPropertyName("status")]
    public required Status5 Status { get; init; }

    [JsonPropertyName("socialAccountTypes")]
    [MinLength(1)]
    public required IReadOnlyList<SocialAccountTypeBundleSocialOrganizationApi> SocialAccountTypes { get; init; }

    [JsonPropertyName("data")]
    public required Data Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstComment")]
    public FirstComment2? FirstComment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
