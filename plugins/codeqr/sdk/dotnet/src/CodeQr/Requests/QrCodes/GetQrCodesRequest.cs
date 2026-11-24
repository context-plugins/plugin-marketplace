using System;
using CodeQr.Core.Validation.Attributes;
using CodeQr.Models.AnyOf;
using CodeQr.Models.Enums;

namespace CodeQr.Requests.QrCodes;

/// <summary>
/// The inputs of the GetQrCodes operation.
/// </summary>
public sealed record GetQrCodesRequest
{
    /// <summary>
    /// The slug of the project to which the QR code belongs. For example, for <c>app.codeqr.io/acme</c>, the projectSlug is <c>acme</c>.
    /// </summary>
    public string? ProjectSlug { get; init; }

    /// <summary>
    /// The domain to filter the QR codes. For example, <c>ac.me</c>. If not provided, all QR codes of the project will be returned.
    /// </summary>
    public string? Domain { get; init; }

    /// <summary>
    /// [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.
    /// </summary>
    public string? TagId { get; init; }

    /// <summary>
    /// The IDs of the tags to filter the QR codes.
    /// </summary>
    public TagIdsModel? TagIds { get; init; }

    /// <summary>
    /// The unique name of the tags assigned to the QR code (case insensitive).
    /// </summary>
    public TagNames? TagNames { get; init; }

    /// <summary>
    /// The folder ID to filter the QR codes by.
    /// </summary>
    public string? FolderId { get; init; }

    /// <summary>
    /// The search term to filter the QR codes. The search term will be matched against the QR code slug, title, and the destination URL.
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// The ID of the user to filter by.
    /// </summary>
    public string? UserId { get; init; }

    /// <summary>
    /// If should include archived QR codes in the response. The default is <c>false</c> if not provided.
    /// </summary>
    public bool ShowArchived { get; init; } = false;

    /// <summary>
    /// The comments to filter by.
    /// </summary>
    public string? Comments { get; init; }

    /// <summary>
    /// The password to filter by.
    /// </summary>
    public string? Password { get; init; }

    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// If should include QR codes with conversion tracking enabled. The default is <c>false</c> if not provided.
    /// </summary>
    public bool TrackConversion { get; init; } = false;

    /// <summary>
    /// If should include tags in the response. The default is <c>false</c> if not provided.
    /// </summary>
    public bool WithTags { get; init; } = false;

    /// <summary>
    /// Filter QR codes marked as templates.
    /// </summary>
    public bool? UseAsTemplate { get; init; }

    /// <summary>
    /// Filter by QR code format - static or dynamic
    /// </summary>
    public Format? Format { get; init; }

    /// <summary>
    /// Filter by QR code type
    /// </summary>
    public Type2? Type { get; init; }

    /// <summary>
    /// Filter QR codes with/without password protection
    /// </summary>
    public bool? HasPassword { get; init; }

    /// <summary>
    /// Filter QR codes with/without expiration date
    /// </summary>
    public bool? HasExpiration { get; init; }

    /// <summary>
    /// Filter QR codes with/without UTM parameters
    /// </summary>
    public bool? HasUtm { get; init; }

    /// <summary>
    /// Filter QR codes with/without custom social media cards
    /// </summary>
    public bool? HasCustomSocial { get; init; }

    /// <summary>
    /// Filter QR codes with/without geo-targeting
    /// </summary>
    public bool? HasGeo { get; init; }

    /// <summary>
    /// Filter QR codes with/without device targeting
    /// </summary>
    public bool? HasDevice { get; init; }

    /// <summary>
    /// Filter QR codes with/without comments
    /// </summary>
    public bool? HasComments { get; init; }

    /// <summary>
    /// Filter QR codes with/without tags
    /// </summary>
    public bool? HasTags { get; init; }

    /// <summary>
    /// Filter QR codes created after this date
    /// </summary>
    public DateTimeOffset? CreatedAfter { get; init; }

    /// <summary>
    /// Filter QR codes created before this date
    /// </summary>
    public DateTimeOffset? CreatedBefore { get; init; }

    /// <summary>
    /// Filter QR codes expiring after this date
    /// </summary>
    public DateTimeOffset? ExpiresAfter { get; init; }

    /// <summary>
    /// Filter QR codes expiring before this date
    /// </summary>
    public DateTimeOffset? ExpiresBefore { get; init; }

    /// <summary>
    /// Minimum number of scans
    /// </summary>
    [Minimum(0)]
    public int? ScansMin { get; init; }

    /// <summary>
    /// Maximum number of scans
    /// </summary>
    [Minimum(0)]
    public int? ScansMax { get; init; }

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
    /// The field to order the QR codes. The default is <c>createdAt</c>, and the order of sorting is always descending.
    /// </summary>
    public SortCodeqrIoQrCodesApi Sort { get; init; } = SortCodeqrIoQrCodesApi.CreatedAt;

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
