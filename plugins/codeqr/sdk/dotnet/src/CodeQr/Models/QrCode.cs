using System.Collections.Generic;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record QrCode
{
    /// <summary>
    /// The unique ID of the QR code.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The domain of the QR code. If not provided, the main domain of the project will be used (or <c>codeqr.link</c> if the project does not have domains).
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    /// <summary>
    /// The slug of the QR code. If not provided, a random slug of 7 characters will be generated.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// If the QR code is archived.
    /// </summary>
    [JsonPropertyName("archived")]
    public bool Archived { get; init; } = false;

    /// <summary>
    /// The date and time the QR code will expire in ISO-8601 format. Must be in the future.
    /// </summary>
    [JsonPropertyName("expiresAt")]
    public required string? ExpiresAt { get; init; }

    /// <summary>
    /// The destination URL when the QR code expires.
    /// </summary>
    [JsonPropertyName("expiredUrl")]
    public required string? ExpiredUrl { get; init; }

    /// <summary>
    /// The password required to access the destination URL of the QR code.
    /// </summary>
    [JsonPropertyName("password")]
    public required string? Password { get; init; }

    /// <summary>
    /// The external ID associated with the QR code.
    /// </summary>
    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// [BETA] If should track conversions for the QR code.
    /// </summary>
    [JsonPropertyName("trackConversion")]
    public bool TrackConversion { get; init; } = false;

    /// <summary>
    /// If the QR code uses the custom link preview feature.
    /// </summary>
    [JsonPropertyName("proxy")]
    public bool Proxy { get; init; } = false;

    /// <summary>
    /// The title of the QR code generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonPropertyName("title")]
    public required string? Title { get; init; }

    /// <summary>
    /// The description of the QR code generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// The image of the QR code generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonPropertyName("image")]
    public required string? Image { get; init; }

    /// <summary>
    /// The source UTM of the QR code.
    /// </summary>
    [JsonPropertyName("utm_source")]
    public required string? UtmSource { get; init; }

    /// <summary>
    /// The medium UTM of the QR code.
    /// </summary>
    [JsonPropertyName("utm_medium")]
    public required string? UtmMedium { get; init; }

    /// <summary>
    /// The campaign UTM of the QR code.
    /// </summary>
    [JsonPropertyName("utm_campaign")]
    public required string? UtmCampaign { get; init; }

    /// <summary>
    /// The term UTM of the QR code.
    /// </summary>
    [JsonPropertyName("utm_term")]
    public required string? UtmTerm { get; init; }

    /// <summary>
    /// The content UTM of the QR code.
    /// </summary>
    [JsonPropertyName("utm_content")]
    public required string? UtmContent { get; init; }

    /// <summary>
    /// If the QR code uses link cloaking.
    /// </summary>
    [JsonPropertyName("rewrite")]
    public bool Rewrite { get; init; } = false;

    /// <summary>
    /// If the QR code should be indexed.
    /// </summary>
    [JsonPropertyName("doIndex")]
    public bool DoIndex { get; init; } = false;

    /// <summary>
    /// If the QR code is flexible.
    /// </summary>
    [JsonPropertyName("flexible")]
    public bool Flexible { get; init; } = false;

    /// <summary>
    /// If the QR code is filled.
    /// </summary>
    [JsonPropertyName("filled")]
    public bool Filled { get; init; } = false;

    /// <summary>
    /// The destination URL for iOS for the QR code for device targeting iOS.
    /// </summary>
    [JsonPropertyName("ios")]
    public required string? Ios { get; init; }

    /// <summary>
    /// The destination URL for Android for the QR code for device targeting Android.
    /// </summary>
    [JsonPropertyName("android")]
    public required string? Android { get; init; }

    /// <summary>
    /// Geographic segmentation information for the QR code in the JSON format <c>{[COUNTRY]: https://example.com }</c>. Learn more: https://codeqr.link/geo
    /// </summary>
    [JsonPropertyName("geo")]
    public required IReadOnlyDictionary<string, string>? Geo { get; init; }

    /// <summary>
    /// Smart rules for conditional destination routing by request attribute.
    /// </summary>
    [JsonPropertyName("rules")]
    public required IReadOnlyList<Rule>? Rules { get; init; }

    /// <summary>
    /// If the QR code is static.
    /// </summary>
    [JsonPropertyName("static")]
    public bool Static { get; init; } = false;

    /// <summary>
    /// For dynamic QR codes with phone, email, or sms types: if true (default), shows an action page with buttons. If false, redirects directly to tel:/mailto:/sms: URI.
    /// </summary>
    [JsonPropertyName("useDisplayPage")]
    public bool UseDisplayPage { get; init; } = true;

    /// <summary>
    /// The type of the QR code.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeCodeqrIoQrCodesApi Type { get; init; }

    /// <summary>
    /// The static content of the QR code.
    /// </summary>
    [JsonPropertyName("contentStatic")]
    public required string? ContentStatic { get; init; }

    /// <summary>
    /// The text of the QR code.
    /// </summary>
    [JsonPropertyName("text")]
    public required string? Text { get; init; }

    /// <summary>
    /// The email information of the QR code.
    /// </summary>
    [JsonPropertyName("email")]
    public required IReadOnlyDictionary<string, string>? Email { get; init; }

    /// <summary>
    /// The WiFi information of the QR code.
    /// </summary>
    [JsonPropertyName("wifi")]
    public required IReadOnlyDictionary<string, string>? Wifi { get; init; }

    /// <summary>
    /// The URL of the QR code.
    /// </summary>
    [JsonPropertyName("url")]
    public required string? Url { get; init; }

    /// <summary>
    /// The phone number of the QR code.
    /// </summary>
    [JsonPropertyName("phone")]
    public required string? Phone { get; init; }

    /// <summary>
    /// The vCard information of the QR code.
    /// </summary>
    [JsonPropertyName("vcard")]
    public required IReadOnlyDictionary<string, string>? Vcard { get; init; }

    /// <summary>
    /// The cryptocurrency information of the QR code.
    /// </summary>
    [JsonPropertyName("crypto")]
    public required IReadOnlyDictionary<string, string>? Crypto { get; init; }

    /// <summary>
    /// The SMS information of the QR code.
    /// </summary>
    [JsonPropertyName("sms")]
    public required IReadOnlyDictionary<string, string>? Sms { get; init; }

    /// <summary>
    /// The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message.
    /// </summary>
    [JsonPropertyName("whatsapp")]
    public required Whatsapp? Whatsapp { get; init; }

    /// <summary>
    /// The FaceTime information of the QR code.
    /// </summary>
    [JsonPropertyName("facetime")]
    public required IReadOnlyDictionary<string, string>? Facetime { get; init; }

    /// <summary>
    /// The latitude and longitude information of the QR code.
    /// </summary>
    [JsonPropertyName("latlog")]
    public required IReadOnlyDictionary<string, string>? Latlog { get; init; }

    /// <summary>
    /// The logo of the QR code.
    /// </summary>
    [JsonPropertyName("logo")]
    public required string? Logo { get; init; }

    /// <summary>
    /// The background color of the QR code.
    /// </summary>
    [JsonPropertyName("bgColor")]
    public required string BgColor { get; init; }

    /// <summary>
    /// The foreground color of the QR code.
    /// </summary>
    [JsonPropertyName("fgColor")]
    public required string FgColor { get; init; }

    /// <summary>
    /// The size of the QR code.
    /// </summary>
    [JsonPropertyName("size")]
    public required double Size { get; init; }

    /// <summary>
    /// The level of error correction of the QR code.
    /// </summary>
    [JsonPropertyName("level")]
    public required string Level { get; init; }

    /// <summary>
    /// If the logo should be displayed in the QR code.
    /// </summary>
    [JsonPropertyName("showLogo")]
    public bool ShowLogo { get; init; } = false;

    /// <summary>
    /// The source of the QR code.
    /// </summary>
    [JsonPropertyName("src")]
    public required string? Src { get; init; }

    /// <summary>
    /// The height of the QR code.
    /// </summary>
    [JsonPropertyName("height")]
    public required double Height { get; init; }

    /// <summary>
    /// The width of the QR code.
    /// </summary>
    [JsonPropertyName("width")]
    public required double Width { get; init; }

    /// <summary>
    /// If the QR code should be excavated.
    /// </summary>
    [JsonPropertyName("excavate")]
    public bool Excavate { get; init; } = false;

    /// <summary>
    /// The ID of the user that created the QR code.
    /// </summary>
    [JsonPropertyName("userId")]
    public required string? UserId { get; init; }

    /// <summary>
    /// The ID of the project of the QR code.
    /// </summary>
    [JsonPropertyName("projectId")]
    public required string? ProjectId { get; init; }

    /// <summary>
    /// If the statistics of the QR code are publicly accessible.
    /// </summary>
    [JsonPropertyName("publicStats")]
    public bool PublicStats { get; init; } = false;

    /// <summary>
    /// The number of scans of the QR code.
    /// </summary>
    [JsonPropertyName("scans")]
    public double Scans { get; init; } = 0d;

    /// <summary>
    /// The date and time the QR code was scanned last.
    /// </summary>
    [JsonPropertyName("lastClicked")]
    public required string? LastClicked { get; init; }

    /// <summary>
    /// The number of leads generated by the QR code.
    /// </summary>
    [JsonPropertyName("leads")]
    public double Leads { get; init; } = 0d;

    /// <summary>
    /// The number of sales generated by the QR code.
    /// </summary>
    [JsonPropertyName("sales")]
    public double Sales { get; init; } = 0d;

    /// <summary>
    /// The amount of the sale generated by the link.
    /// </summary>
    [JsonPropertyName("saleAmount")]
    public double SaleAmount { get; init; } = 0d;

    /// <summary>
    /// The date and time the QR code was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// The date and time the QR code was updated last.
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required string UpdatedAt { get; init; }

    /// <summary>
    /// [DEPRECATED (use <c>tags</c> instead)]: The unique ID of the tag assigned to the QR code.
    /// </summary>
    [JsonPropertyName("tagId")]
    public required string? TagId { get; init; }

    /// <summary>
    /// The tags assigned to the QR code.
    /// </summary>
    [JsonPropertyName("tags")]
    public required IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The unique ID of the folder assigned to the QR code.
    /// </summary>
    [JsonPropertyName("folderId")]
    public required string? FolderId { get; init; }

    /// <summary>
    /// The comments for the QR code.
    /// </summary>
    [JsonPropertyName("comments")]
    public required string? Comments { get; init; }

    /// <summary>
    /// Typographic styles applied to the frame label text. Object with optional keys: <c>weight</c> (<c>normal</c> | <c>bold</c>), <c>style</c> (<c>normal</c> | <c>italic</c>), <c>family</c> (<c>sans</c> | <c>sans-condensed</c> | <c>serif</c> | <c>serif-elegant</c> | <c>mono</c>), <c>size</c> (<c>s</c> | <c>m</c> | <c>l</c> | <c>xl</c>). Every field is enum-gated on write; omitted keys render with defaults.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frameTextStyles")]
    public FrameTextStyles? FrameTextStyles { get; init; }

    /// <summary>
    /// The notification token of the QR code.
    /// </summary>
    [JsonPropertyName("notificationToken")]
    public required string? NotificationToken { get; init; }

    /// <summary>
    /// If the QR code has pre-redirection.
    /// </summary>
    [JsonPropertyName("preRedirection")]
    public bool PreRedirection { get; init; } = false;

    /// <summary>
    /// The ID of the page to redirect to before the QR code destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageId")]
    public string? PageId { get; init; }

    /// <summary>
    /// The URL of the page to redirect to before the QR code destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageUrl")]
    public string? PageUrl { get; init; }

    /// <summary>
    /// If the form is mandatory for the page.
    /// </summary>
    [JsonPropertyName("isFormMandatory")]
    public bool IsFormMandatory { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
