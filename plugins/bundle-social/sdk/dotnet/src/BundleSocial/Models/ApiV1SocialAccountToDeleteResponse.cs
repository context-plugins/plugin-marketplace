using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1SocialAccountToDeleteResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<ItemBundleSocialSocialAccountApi> Items { get; init; }

    [JsonPropertyName("pagination")]
    public required PaginationBundleSocialOrganizationApi Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
