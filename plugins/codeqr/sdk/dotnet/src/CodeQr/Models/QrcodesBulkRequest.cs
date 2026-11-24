using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.AnyOf;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record QrcodesBulkRequest
{
    /// <summary>
    /// The domain of the QR code. If not provided, the main domain of the project will be used (or <c>codeqr.link</c> if the project does not have domains).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// The slug of the QR code. If not provided, a random slug of 7 characters will be generated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// The prefix for the randomly generated key. If provided, the key will be prefixed with this value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefix")]
    public string? Prefix { get; init; }

    /// <summary>
    /// This is the ID of the QR code in your database. If defined, it can be used to identify the QR code in the future. It must be prefixed with <c>ext_</c> when passed as a query parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [StringLength(255, MinimumLength = 1)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// If should track conversions for the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trackConversion")]
    public bool? TrackConversion { get; init; } = false;

    /// <summary>
    /// ID of a QR code (in the same project) marked as a template. Its customization fields (colors, logo, pattern, shape, frame) will be applied to the new QR code unless explicitly overridden.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templateId")]
    public string? TemplateId { get; init; }

    /// <summary>
    /// Whether this QR code should be used as a reusable template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useAsTemplate")]
    public bool? UseAsTemplate { get; init; } = false;

    /// <summary>
    /// If the QR code is archived.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; } = false;

    /// <summary>
    /// The date and time the QR code will expire in ISO-8601 format. Must be in the future.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    /// <summary>
    /// The URL to redirect when the QR code expires.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiredUrl")]
    public string? ExpiredUrl { get; init; }

    /// <summary>
    /// The password required to access the destination URL of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// If the QR code uses the custom link preview feature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxy")]
    public bool? Proxy { get; init; } = false;

    /// <summary>
    /// The title of the QR code generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The description of the QR code generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The image of the QR code generated via <c>api.codeqr.io/metatags</c>. Will be used for custom link preview if <c>proxy</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public string? Image { get; init; }

    /// <summary>
    /// If the QR code uses link cloaking.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rewrite")]
    public bool? Rewrite { get; init; } = false;

    /// <summary>
    /// The destination URL for iOS for the QR code for device targeting iOS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ios")]
    public string? Ios { get; init; }

    /// <summary>
    /// The destination URL for Android for the QR code for device targeting Android.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("android")]
    public string? Android { get; init; }

    /// <summary>
    /// Geographic segmentation information for the QR code in the JSON format <c>{[COUNTRY]: https://example.com }</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geo")]
    public GeoCodeqrIoQrCodesApi? Geo { get; init; }

    /// <summary>
    /// Smart rules for conditional destination routing by request attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    [MaxLength(20)]
    public IReadOnlyList<Rule1>? Rules { get; init; }

    /// <summary>
    /// Allow search engines to index your QR code. The default is <c>false</c> if not provided. Learn more: https://codeqr.link/noindex
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("doIndex")]
    public bool? DoIndex { get; init; } = false;

    /// <summary>
    /// An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookIds")]
    public IReadOnlyList<string>? WebhookIds { get; init; }

    /// <summary>
    /// If the statistics of the QR code are publicly accessible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publicStats")]
    public bool? PublicStats { get; init; } = false;

    /// <summary>
    /// The unique ID of the tag assigned to the QR code. This field is deprecated – use <c>tagIds</c> instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagId")]
    public string? TagId { get; init; }

    /// <summary>
    /// The unique IDs of the tags assigned to the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagIds")]
    public TagIds? TagIds { get; init; }

    /// <summary>
    /// The unique name of the tags assigned to the QR code (case insensitive).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagNames")]
    public TagNames? TagNames { get; init; }

    /// <summary>
    /// The unique ID of the folder assigned to the QR code. Omit or set to null for no folder.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folderId")]
    public string? FolderId { get; init; }

    /// <summary>
    /// The comments for the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comments")]
    public string? Comments { get; init; }

    /// <summary>
    /// If the QR code is flexible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flexible")]
    public bool? Flexible { get; init; } = false;

    /// <summary>
    /// If the QR code is filled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filled")]
    public bool? Filled { get; init; } = false;

    /// <summary>
    /// If the QR code is static.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("static")]
    public bool? Static { get; init; } = false;

    /// <summary>
    /// For dynamic QR codes with phone, email, or sms types: if true (default), shows an action page with buttons. If false, redirects directly to tel:/mailto:/sms: URI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useDisplayPage")]
    public bool? UseDisplayPage { get; init; } = true;

    /// <summary>
    /// The type of content of the QR code.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    /// <summary>
    /// The text of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// The email information of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public IReadOnlyDictionary<string, string>? Email { get; init; }

    /// <summary>
    /// The WiFi information of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("wifi")]
    public IReadOnlyDictionary<string, string>? Wifi { get; init; }

    /// <summary>
    /// The destination URL of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// The phone number of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    public string? Phone { get; init; }

    /// <summary>
    /// The vCard information of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcard")]
    public IReadOnlyDictionary<string, string>? Vcard { get; init; }

    /// <summary>
    /// The cryptocurrency information of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("crypto")]
    public IReadOnlyDictionary<string, string>? Crypto { get; init; }

    /// <summary>
    /// The SMS information of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sms")]
    public IReadOnlyDictionary<string, string>? Sms { get; init; }

    /// <summary>
    /// The WhatsApp click-to-chat info: E.164 number (digits only) and optional prefilled message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("whatsapp")]
    public Whatsapp? Whatsapp { get; init; }

    /// <summary>
    /// The FaceTime information of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("facetime")]
    public IReadOnlyDictionary<string, string>? Facetime { get; init; }

    /// <summary>
    /// The latitude and longitude information of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latlog")]
    public IReadOnlyDictionary<string, string>? Latlog { get; init; }

    /// <summary>
    /// The Pix information of the QR code (key, name, city, amount, description).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pix")]
    public object? Pix { get; init; }

    /// <summary>
    /// The logo of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logo")]
    public string? Logo { get; init; }

    /// <summary>
    /// The background color of the QR code (hex or CSS keyword). Invalid values are coerced to default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bgColor")]
    public string? BgColor { get; init; } = "#ffffff";

    /// <summary>
    /// The foreground color of the QR code (hex or CSS keyword). Invalid values are coerced to default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fgColor")]
    public string? FgColor { get; init; } = "#000000";

    /// <summary>
    /// The size of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public double? Size { get; init; } = 1024d;

    /// <summary>
    /// The level of error correction of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("level")]
    public string? Level { get; init; } = "M";

    /// <summary>
    /// If the logo should be displayed in the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showLogo")]
    public bool? ShowLogo { get; init; } = true;

    /// <summary>
    /// The image URL of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("src")]
    public string? Src { get; init; }

    /// <summary>
    /// Logo height in pixels. When omitted, a proportional size is used based on the QR code size (about 10–20% depending on size).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    public double? Height { get; init; }

    /// <summary>
    /// Logo width in pixels. When omitted, a proportional size is used based on the QR code size (about 10–20% depending on size).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    public double? Width { get; init; }

    /// <summary>
    /// If the QR code should have excavated areas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excavate")]
    public bool? Excavate { get; init; } = true;

    /// <summary>
    /// The pattern of the modules of the QR code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pattern")]
    public string? Pattern { get; init; } = "default";

    /// <summary>
    /// The shape of the design around the QR code (none, square, circle).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shape")]
    public string? Shape { get; init; } = "none";

    /// <summary>
    /// The type of frame of the QR code (e.g. none, frame-1, frame-2, frame-3, frame-5, frame-6). frame-5/6 are top-bar variants. Unknown ids fall back to no frame at render.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frame")]
    public string? Frame { get; init; } = "none";

    /// <summary>
    /// The color of the frame (hex or CSS keyword). Invalid values are coerced to default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frameColor")]
    public string? FrameColor { get; init; } = "#000000";

    /// <summary>
    /// Label text rendered inside the frame (e.g. "SCAN ME", a product SKU). Maximum 200 characters. Word-wraps to multiple lines at larger sizes; the frame bar grows vertically to fit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frameText")]
    [MaxLength(200)]
    public string? FrameText { get; init; }

    /// <summary>
    /// Color of the frame label text (hex <c>#RRGGBB</c>, <c>#RGB</c>, <c>#RRGGBBAA</c>, or a CSS keyword from the allowlist). When omitted, a contrasting color is derived automatically from <c>frameColor</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frameTextColor")]
    public string? FrameTextColor { get; init; }

    /// <summary>
    /// Typographic styles applied to the frame label text. Every key is enum-gated — unknown keys or out-of-enum values are rejected to prevent SVG attribute injection. All fields are optional; omitted keys fall back to the default (normal weight, normal style, sans family, medium size).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frameTextStyles")]
    public FrameTextStyles1? FrameTextStyles { get; init; }

    /// <summary>
    /// If the QR code has pre-redirection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preRedirection")]
    public bool? PreRedirection { get; init; } = false;

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isFormMandatory")]
    public bool? IsFormMandatory { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
