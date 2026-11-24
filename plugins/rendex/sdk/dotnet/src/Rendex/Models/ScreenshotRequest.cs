using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

/// <summary>
/// Provide exactly one of <c>url</c>, <c>html</c>, or <c>markdown</c> (mutually exclusive). If none is
/// provided, the request will fail with a validation error.
/// </summary>
public record ScreenshotRequest
{
    /// <summary>
    /// Webpage URL to capture (mutually exclusive with <c>html</c> and <c>markdown</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// Raw HTML to render (up to 5 MB, mutually exclusive with <c>url</c> and <c>markdown</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html")]
    [MaxLength(5242880)]
    public string? Html { get; init; }

    /// <summary>
    /// Markdown to render as styled HTML, then capture (up to 5 MB, mutually exclusive with <c>url</c> and <c>html</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("markdown")]
    [MaxLength(5242880)]
    public string? Markdown { get; init; }

    /// <summary>
    /// Mustache template data object. When present, the <c>html</c> or <c>markdown</c> string is
    /// treated as a logic-less Mustache template and rendered against <c>data</c> before capture.
    /// Valid only with <c>html</c> or <c>markdown</c> — returns 400 if combined with <c>url</c>.
    /// Serialized size must not exceed 256 KB.
    /// Syntax: <c>{{var}}</c> (HTML-escaped), <c>{{{var}}}</c> (raw), <c>{{#items}}…{{/items}}</c> (loop),
    /// <c>{{^x}}…{{/x}}</c> (inverted section), <c>{{a.b}}</c> (nested access).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public object? Data { get; init; }

    /// <summary>
    /// Output format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public Format? Format { get; init; } = Format.Png;

    /// <summary>
    /// Viewport width in pixels
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    [Minimum(320)]
    [Maximum(3840)]
    public int? Width { get; init; } = 1280;

    /// <summary>
    /// Viewport height in pixels
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    [Minimum(240)]
    [Maximum(2160)]
    public int? Height { get; init; } = 800;

    /// <summary>
    /// Capture full scrollable page (capped at 16384px height)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullPage")]
    public bool? FullPage { get; init; } = false;

    /// <summary>
    /// Image quality (JPEG and WebP only)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quality")]
    [Minimum(1)]
    [Maximum(100)]
    public int? Quality { get; init; }

    /// <summary>
    /// Wait milliseconds after page load before capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delay")]
    [Minimum(0)]
    [Maximum(10000)]
    public int? Delay { get; init; } = 0;

    /// <summary>
    /// Emulate dark color scheme
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("darkMode")]
    public bool? DarkMode { get; init; } = false;

    /// <summary>
    /// Device pixel ratio (2 for Retina)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deviceScaleFactor")]
    [Minimum(1.0)]
    [Maximum(3.0)]
    public double? DeviceScaleFactor { get; init; } = 2d;

    /// <summary>
    /// Block ads, trackers, and chat widgets
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockAds")]
    public bool? BlockAds { get; init; } = true;

    /// <summary>
    /// Resource types to block during page load
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockResourceTypes")]
    public IReadOnlyList<BlockResourceType>? BlockResourceTypes { get; init; }

    /// <summary>
    /// CSS to inject into the page before capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("css")]
    [MaxLength(51200)]
    public string? Css { get; init; }

    /// <summary>
    /// JavaScript to execute on the page before capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("js")]
    [MaxLength(51200)]
    public string? Js { get; init; }

    /// <summary>
    /// Cookies to set before navigating to the page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cookies")]
    public IReadOnlyList<Cookie>? Cookies { get; init; }

    /// <summary>
    /// Custom HTTP headers to send with the page request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, string>? Headers { get; init; }

    /// <summary>
    /// Custom User-Agent string
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userAgent")]
    [MaxLength(512)]
    public string? UserAgent { get; init; }

    /// <summary>
    /// Navigation timeout in seconds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeout")]
    [Minimum(5)]
    [Maximum(60)]
    public int? Timeout { get; init; } = 30;

    /// <summary>
    /// Page readiness condition before capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("waitUntil")]
    public WaitUntil? WaitUntil { get; init; } = WaitUntil.Networkidle2;

    /// <summary>
    /// CSS selector to wait for before capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("waitForSelector")]
    [MaxLength(500)]
    public string? WaitForSelector { get; init; }

    /// <summary>
    /// Return partial screenshot on timeout instead of failing
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bestAttempt")]
    public bool? BestAttempt { get; init; } = true;

    /// <summary>
    /// CSS selector of element to capture instead of full page
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selector")]
    [MaxLength(500)]
    public string? Selector { get; init; }

    /// <summary>
    /// Paper size for PDF output (only applies when <c>format</c> is <c>pdf</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfFormat")]
    public PdfFormat? PdfFormat { get; init; }

    /// <summary>
    /// Use landscape orientation for PDF output
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfLandscape")]
    public bool? PdfLandscape { get; init; }

    /// <summary>
    /// Include background colors and images in PDF output
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfPrintBackground")]
    public bool? PdfPrintBackground { get; init; }

    /// <summary>
    /// Scale factor for PDF rendering (0.1 to 2)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfScale")]
    [Minimum(0.1)]
    [Maximum(2.0)]
    public double? PdfScale { get; init; }

    /// <summary>
    /// Page margins for PDF output (CSS units, e.g. "1cm", "0.5in")
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfMargin")]
    public PdfMargin? PdfMargin { get; init; }

    /// <summary>
    /// ISO 3166-1 alpha-2 country code for geo-targeted rendering (Pro/Enterprise)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geo")]
    [StringLength(2, MinimumLength = 2)]
    public string? Geo { get; init; }

    /// <summary>
    /// City for geo-targeted rendering (Pro/Enterprise)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geoCity")]
    [MaxLength(100)]
    public string? GeoCity { get; init; }

    /// <summary>
    /// State or region for geo-targeted rendering (Pro/Enterprise)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geoState")]
    [MaxLength(100)]
    public string? GeoState { get; init; }

    /// <summary>
    /// Process the capture asynchronously (returns a <c>jobId</c> to poll)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("async")]
    public bool? Async { get; init; }

    /// <summary>
    /// URL to receive a webhook notification when the capture completes (Starter+ channel; Free/Basic poll GET /v1/jobs/{jobId} instead).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webhookUrl")]
    [Format(FormatKind.Uri)]
    public string? WebhookUrl { get; init; }

    /// <summary>
    /// Cache time-to-live in seconds (1 hour to 30 days)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cacheTtl")]
    [Minimum(3600)]
    [Maximum(2592000)]
    public int? CacheTtl { get; init; }

    /// <summary>
    /// Device preset — sets viewport, device scale, and user agent in one parameter. Explicit width/height/userAgent still win.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public Device? Device { get; init; }

    /// <summary>
    /// CSS selectors to hide before capture (popups, sticky nav, chat bubbles). Never errors on a miss.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hideSelectors")]
    [MaxLength(50)]
    public IReadOnlyList<string>? HideSelectors { get; init; }

    /// <summary>
    /// Hide common cookie/consent walls (OneTrust, Cookiebot, Quantcast, …) via a curated CSS list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockCookieBanners")]
    public bool? BlockCookieBanners { get; init; } = false;

    /// <summary>
    /// Store the result in R2 and return <c>{url, expiresAt}</c> (a signed CDN-backed URL) instead of the image bytes. Drop the URL into an <c>&lt;img&gt;</c>/<c>og:image</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hosted")]
    public bool? Hosted { get; init; } = false;

    /// <summary>
    /// Also return clean reader-mode content from the same render pass (use on <c>/v1/screenshot/json</c>; the binary endpoint rejects it). Shape set by <c>extractFormat</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extract")]
    public bool? Extract { get; init; } = false;

    /// <summary>
    /// Shape of the extracted content when <c>extract</c> is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractFormat")]
    public ExtractFormat? ExtractFormat { get; init; } = ExtractFormat.Markdown;

    /// <summary>
    /// Downscale the output to this width (image formats only). Aspect ratio preserved when only one dimension is set. Never upscales.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resizeWidth")]
    [Minimum(16)]
    [Maximum(3840)]
    public int? ResizeWidth { get; init; }

    /// <summary>
    /// Downscale the output to this height (image formats only).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resizeHeight")]
    [Minimum(16)]
    [Maximum(2160)]
    public int? ResizeHeight { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
