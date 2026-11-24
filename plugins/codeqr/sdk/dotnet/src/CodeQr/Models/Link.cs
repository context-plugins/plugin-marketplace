using System.Collections.Generic;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Core.Validation;
using CodeQr.Core.Validation.Attributes;
using CodeQr.Models.AnyOf;

namespace CodeQr.Models;

public record Link
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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public string? ExpiresAt { get; init; }

    [JsonPropertyName("expiredUrl")]
    [Format(FormatKind.Uri)]
    public required string? ExpiredUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trackConversion")]
    public bool? TrackConversion { get; init; }

    /// <summary>
    /// Whether the short link is flexible.
    /// </summary>
    [JsonPropertyName("flexible")]
    public bool Flexible { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doIndex")]
    public bool? DoIndex { get; init; }

    [JsonPropertyName("password")]
    public required string? Password { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    public string? ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxy")]
    public bool? Proxy { get; init; }

    [JsonPropertyName("title")]
    public required string? Title { get; init; }

    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    [JsonPropertyName("image")]
    public required string? Image { get; init; }

    [JsonPropertyName("video")]
    public required string? Video { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rewrite")]
    public bool? Rewrite { get; init; }

    [JsonPropertyName("ios")]
    public required string? Ios { get; init; }

    [JsonPropertyName("android")]
    public required string? Android { get; init; }

    [JsonPropertyName("geo")]
    public required IReadOnlyDictionary<string, string>? Geo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    public IReadOnlyList<Rule>? Rules { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicStats")]
    public bool? PublicStats { get; init; }

    [JsonPropertyName("tagId")]
    public required string? TagId { get; init; }

    [JsonPropertyName("tags")]
    public required IReadOnlyList<Tag>? Tags { get; init; }

    [JsonPropertyName("folderId")]
    public required string? FolderId { get; init; }

    [JsonPropertyName("comments")]
    public required string? Comments { get; init; }

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

    [JsonPropertyName("utm_source")]
    public required string? UtmSource { get; init; }

    [JsonPropertyName("utm_medium")]
    public required string? UtmMedium { get; init; }

    [JsonPropertyName("utm_campaign")]
    public required string? UtmCampaign { get; init; }

    [JsonPropertyName("utm_term")]
    public required string? UtmTerm { get; init; }

    [JsonPropertyName("utm_content")]
    public required string? UtmContent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public string? UserId { get; init; }

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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastClicked")]
    public LastClicked? LastClicked { get; init; }

    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

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
