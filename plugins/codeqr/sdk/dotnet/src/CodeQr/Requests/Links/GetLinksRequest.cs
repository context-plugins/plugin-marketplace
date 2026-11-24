using System;
using CodeQr.Core.Validation.Attributes;
using CodeQr.Models;
using CodeQr.Models.AnyOf;
using CodeQr.Models.Enums;

namespace CodeQr.Requests.Links;

/// <summary>
/// The inputs of the GetLinks operation.
/// </summary>
public sealed record GetLinksRequest
{
    /// <summary>
    /// The slug of the project to which the link belongs. For example, for <c>app.codeqr.io/acme</c>, the projectSlug is <c>acme</c>.
    /// </summary>
    public string? ProjectSlug { get; init; }

    /// <summary>
    /// The domain to filter the links. For example, <c>ac.me</c>. If not provided, all links of the project will be returned.
    /// </summary>
    public string? Domain { get; init; }

    /// <summary>
    /// [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.
    /// </summary>
    public string? TagId { get; init; }

    /// <summary>
    /// The IDs of the tags to filter the links.
    /// </summary>
    public TagIdsModel? TagIds { get; init; }

    /// <summary>
    /// The unique name of the tags assigned to the short link (case insensitive).
    /// </summary>
    public TagNames? TagNames { get; init; }

    /// <summary>
    /// The folder ID to filter the links by.
    /// </summary>
    public string? FolderId { get; init; }

    /// <summary>
    /// The search term to filter the links. The search term will be matched against the short link slug and the destination URL.
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// The ID of the user to filter by.
    /// </summary>
    public string? UserId { get; init; }

    /// <summary>
    /// If should include archived links in the response. The default is <c>false</c> if not provided.
    /// </summary>
    public bool ShowArchived { get; init; } = false;

    /// <summary>
    /// The password to filter by.
    /// </summary>
    public string? Password { get; init; }

    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// Geographic segmentation information for the short link in JSON format <c>{[COUNTRY]: https://example.com }</c>.
    /// </summary>
    public Geo1? Geo { get; init; }

    /// <summary>
    /// The iOS device to filter by.
    /// </summary>
    public string? Ios { get; init; }

    /// <summary>
    /// The Android device to filter by.
    /// </summary>
    public string? Android { get; init; }

    /// <summary>
    /// The comments to filter by.
    /// </summary>
    public string? Comments { get; init; }

    /// <summary>
    /// If should include tags in the response. The default is <c>false</c> if not provided.
    /// </summary>
    public bool WithTags { get; init; } = false;

    /// <summary>
    /// If should include links with conversion tracking enabled. The default is <c>false</c> if not provided.
    /// </summary>
    public bool TrackConversion { get; init; } = false;

    /// <summary>
    /// Filter links marked as templates.
    /// </summary>
    public bool? UseAsTemplate { get; init; }

    /// <summary>
    /// Filter links that have password protection (any password)
    /// </summary>
    public bool? HasPassword { get; init; }

    /// <summary>
    /// Filter links that have expiration date (any expiration)
    /// </summary>
    public bool? HasExpiration { get; init; }

    /// <summary>
    /// Filter links that have UTM parameters
    /// </summary>
    public bool? HasUtm { get; init; }

    /// <summary>
    /// Filter links that have custom social media cards
    /// </summary>
    public bool? HasCustomSocial { get; init; }

    /// <summary>
    /// Filter links that have geo-targeting
    /// </summary>
    public bool? HasGeo { get; init; }

    /// <summary>
    /// Filter links that have device targeting
    /// </summary>
    public bool? HasDevice { get; init; }

    /// <summary>
    /// Filter links that have comments (any comments)
    /// </summary>
    public bool? HasComments { get; init; }

    /// <summary>
    /// Filter links that have tags (any tags)
    /// </summary>
    public bool? HasTags { get; init; }

    /// <summary>
    /// Created after date (ISO string)
    /// </summary>
    public DateTimeOffset? CreatedAfter { get; init; }

    /// <summary>
    /// Created before date (ISO string)
    /// </summary>
    public DateTimeOffset? CreatedBefore { get; init; }

    /// <summary>
    /// Expires after date (ISO string)
    /// </summary>
    public DateTimeOffset? ExpiresAfter { get; init; }

    /// <summary>
    /// Expires before date (ISO string)
    /// </summary>
    public DateTimeOffset? ExpiresBefore { get; init; }

    /// <summary>
    /// Minimum number of clicks
    /// </summary>
    [Minimum(0)]
    public int? ClicksMin { get; init; }

    /// <summary>
    /// Maximum number of clicks
    /// </summary>
    [Minimum(0)]
    public int? ClicksMax { get; init; }

    /// <summary>
    /// Filter by UTM source value
    /// </summary>
    public string? UtmSource { get; init; }

    /// <summary>
    /// Filter by UTM medium value
    /// </summary>
    public string? UtmMedium { get; init; }

    /// <summary>
    /// Filter by UTM campaign value
    /// </summary>
    public string? UtmCampaign { get; init; }

    /// <summary>
    /// Filter by UTM content value
    /// </summary>
    public string? UtmContent { get; init; }

    /// <summary>
    /// Filter by UTM term value
    /// </summary>
    public string? UtmTerm { get; init; }

    /// <summary>
    /// The field to sort the links by. The default is <c>createdAt</c>, and sort order is always descending.
    /// </summary>
    public Sort Sort { get; init; } = Sort.CreatedAt;

    /// <summary>
    /// Link IDs to filter by.
    /// </summary>
    public LinkIds? LinkIds { get; init; }

    /// <summary>
    /// The page number for pagination.
    /// </summary>
    [ExclusiveMinimum(0)]
    public double Page { get; init; } = 1d;

    /// <summary>
    /// The number of items per page.
    /// </summary>
    [Maximum(100.0)]
    [ExclusiveMinimum(0)]
    public double PageSize { get; init; } = 100d;
}
