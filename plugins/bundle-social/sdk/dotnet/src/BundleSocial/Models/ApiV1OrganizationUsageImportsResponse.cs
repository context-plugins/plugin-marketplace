using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1OrganizationUsageImportsResponse
{
    [JsonPropertyName("limitPerSocialAccount")]
    public required double LimitPerSocialAccount { get; init; }

    [JsonPropertyName("socialAccounts")]
    public required IReadOnlyList<SocialAccountBundleSocialOrganizationApi> SocialAccounts { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationBundleSocialOrganizationApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
