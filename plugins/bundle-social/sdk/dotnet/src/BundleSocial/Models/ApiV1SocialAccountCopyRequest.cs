using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1SocialAccountCopyRequest
{
    [JsonPropertyName("fromTeamId")]
    public required string FromTeamId { get; init; }

    [JsonPropertyName("toTeamId")]
    public required string ToTeamId { get; init; }

    /// <summary>
    /// If you set that to true, selected page will not be transferred automatically. The user will have to select the page themselves again. This only applies to Facebook, Instagram, Linkedin and Youtube.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resetChannel")]
    public bool? ResetChannel { get; init; }

    [JsonPropertyName("socialAccountTypes")]
    [MinLength(1)]
    public required IReadOnlyList<SocialAccountTypeBundleSocialOrganizationApi> SocialAccountTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
