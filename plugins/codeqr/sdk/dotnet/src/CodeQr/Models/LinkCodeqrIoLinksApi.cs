using System.Collections.Generic;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Core.Validation;
using CodeQr.Core.Validation.Attributes;

namespace CodeQr.Models;

public record LinkCodeqrIoLinksApi
{
    /// <summary>
    /// The unique ID of the short link.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The domain of the short link. If not provided, the main domain of the project will be used (or <c>codeqr.link</c> if the project has no domains).
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// The slug of the short link. If not provided, a random 7-character slug will be generated.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// The destination URL of the short link.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Whether the short link is archived.
    /// </summary>
    [JsonPropertyName("archived")]
    public bool Archived { get; init; } = false;

    /// <summary>
    /// The date and time when the short link will expire in ISO-8601 format. Must be in the future.
    /// </summary>
    [JsonPropertyName("expiresAt")]
    public required string? ExpiresAt { get; init; }

    /// <summary>
    /// The URL to redirect to when the short link expires.
    /// </summary>
    [JsonPropertyName("expiredUrl")]
    [Format(FormatKind.Uri)]
    public required string? ExpiredUrl { get; init; }

    /// <summary>
    /// [BETA] Whether to track conversions for the short link.
    /// </summary>
    [JsonPropertyName("trackConversion")]
    public bool TrackConversion { get; init; } = false;

    /// <summary>
    /// Whether the short link is flexible.
    /// </summary>
    [JsonPropertyName("flexible")]
    public bool Flexible { get; init; } = false;

    /// <summary>
    /// Whether search engines can index the short link.
    /// </summary>
    [JsonPropertyName("doIndex")]
    public bool DoIndex { get; init; } = false;

    /// <summary>
    /// The password required to access the short link destination URL.
    /// </summary>
    [JsonPropertyName("password")]
    public required string? Password { get; init; }

    /// <summary>
    /// This is the ID of the link in your database.
    /// </summary>
    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// Whether the short link uses the custom link preview feature.
    /// </summary>
    [JsonPropertyName("proxy")]
    public bool Proxy { get; init; } = false;

    /// <summary>
    /// The title of the short link generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonPropertyName("title")]
    public required string? Title { get; init; }

    /// <summary>
    /// The description of the short link generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// The image of the short link generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonPropertyName("image")]
    public required string? Image { get; init; }

    /// <summary>
    /// The video of the short link.
    /// </summary>
    [JsonPropertyName("video")]
    public required string? Video { get; init; }

    /// <summary>
    /// Whether the short link uses link cloaking.
    /// </summary>
    [JsonPropertyName("rewrite")]
    public bool Rewrite { get; init; } = false;

    /// <summary>
    /// The iOS destination URL for the short link for iOS device targeting.
    /// </summary>
    [JsonPropertyName("ios")]
    public required string? Ios { get; init; }

    /// <summary>
    /// The Android destination URL for the short link for Android device targeting.
    /// </summary>
    [JsonPropertyName("android")]
    public required string? Android { get; init; }

    /// <summary>
    /// Geographic targeting information for the short link in JSON format <c>{[COUNTRY]: https://example.com }</c>. Learn more: https://codeqr.link/geo
    /// </summary>
    [JsonPropertyName("geo")]
    public required IReadOnlyDictionary<string, string>? Geo { get; init; }

    /// <summary>
    /// Smart rules for conditional destination routing by request attribute.
    /// </summary>
    [JsonPropertyName("rules")]
    public required IReadOnlyList<Rule>? Rules { get; init; }

    /// <summary>
    /// Whether the short link statistics are publicly accessible.
    /// </summary>
    [JsonPropertyName("publicStats")]
    public bool PublicStats { get; init; } = false;

    /// <summary>
    /// [DEPRECATED (use <c>tags</c> instead)]: The unique ID of the tag assigned to the short link.
    /// </summary>
    [JsonPropertyName("tagId")]
    public required string? TagId { get; init; }

    /// <summary>
    /// The tags assigned to the short link.
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The unique ID of the folder assigned to the short link.
    /// </summary>
    [JsonPropertyName("folderId")]
    public required string? FolderId { get; init; }

    /// <summary>
    /// The comments for the short link.
    /// </summary>
    [JsonPropertyName("comments")]
    public required string? Comments { get; init; }

    /// <summary>
    /// The notification token of the short link.
    /// </summary>
    [JsonPropertyName("notificationToken")]
    public required string? NotificationToken { get; init; }

    /// <summary>
    /// The complete URL of the short link, including the https protocol (for example, <c>https://codeqr.link/try</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortLink")]
    [Format(FormatKind.Uri)]
    public string? ShortLink { get; init; }

    /// <summary>
    /// The complete QR code URL for the short link (for example, <c>https://api.codeqr.io/qr?url=https://codeqr.link/try</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qrCode")]
    [Format(FormatKind.Uri)]
    public string? QrCode { get; init; }

    /// <summary>
    /// The UTM source of the short link.
    /// </summary>
    [JsonPropertyName("utm_source")]
    public required string? UtmSource { get; init; }

    /// <summary>
    /// The UTM medium of the short link.
    /// </summary>
    [JsonPropertyName("utm_medium")]
    public required string? UtmMedium { get; init; }

    /// <summary>
    /// The UTM campaign of the short link.
    /// </summary>
    [JsonPropertyName("utm_campaign")]
    public required string? UtmCampaign { get; init; }

    /// <summary>
    /// The UTM term of the short link.
    /// </summary>
    [JsonPropertyName("utm_term")]
    public required string? UtmTerm { get; init; }

    /// <summary>
    /// The UTM content of the short link.
    /// </summary>
    [JsonPropertyName("utm_content")]
    public required string? UtmContent { get; init; }

    /// <summary>
    /// The ID of the user who created the short link.
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    /// <summary>
    /// The ID of the project of the short link.
    /// </summary>
    [JsonPropertyName("projectId")]
    public required string ProjectId { get; init; }

    /// <summary>
    /// The number of clicks on the short link.
    /// </summary>
    [JsonPropertyName("clicks")]
    public double Clicks { get; init; } = 0d;

    /// <summary>
    /// The number of leads generated by the short link.
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales generated by the short link.
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The amount of the sale generated by the link.
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    /// <summary>
    /// The date and time when the short link was last clicked.
    /// </summary>
    [JsonPropertyName("lastClicked")]
    public required string? LastClicked { get; init; }

    /// <summary>
    /// The date and time when the short link was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// The date and time when the short link was last updated.
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required string UpdatedAt { get; init; }

    /// <summary>
    /// Whether the short link has pre-redirection.
    /// </summary>
    [JsonPropertyName("preRedirection")]
    public bool PreRedirection { get; init; } = false;

    /// <summary>
    /// The ID of the page to redirect to before the link destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageId")]
    public string? PageId { get; init; }

    /// <summary>
    /// The URL of the page to redirect to before the link destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageUrl")]
    public string? PageUrl { get; init; }

    /// <summary>
    /// If the form is mandatory for the page.
    /// </summary>
    [JsonPropertyName("isFormMandatory")]
    public bool IsFormMandatory { get; init; } = false;

    /// <summary>
    /// Whether the link is filled or not.
    /// </summary>
    [JsonPropertyName("filled")]
    public bool Filled { get; init; } = false;

    /// <summary>
    /// Whether this link should be used as a reusable template.
    /// </summary>
    [JsonPropertyName("useAsTemplate")]
    public bool UseAsTemplate { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
