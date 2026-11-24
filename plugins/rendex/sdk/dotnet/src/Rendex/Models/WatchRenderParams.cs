using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

/// <summary>
/// Render knobs applied on every check — a subset of the screenshot capture params, stored on
/// the watch and fed to the renderer each run. Inline source params (<c>url</c>/<c>html</c>/<c>markdown</c>/
/// <c>data</c>) and credential knobs (<c>cookies</c>/<c>headers</c>/<c>css</c>/<c>js</c>) are NOT accepted here; the
/// watch's target is the top-level <c>url</c>. Validated with a STRICT schema: any capture param
/// outside the list below (e.g. <c>quality</c>, <c>css</c>, <c>js</c>, <c>resize*</c>, <c>pdf*</c>, <c>userAgent</c>,
/// <c>cookies</c>, <c>headers</c>) is REJECTED with a 400 VALIDATION_ERROR — extras are NOT silently ignored.
/// </summary>
public record WatchRenderParams
{
    /// <summary>
    /// A pdf cannot be visually diffed — pair it with diffMode <c>text</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public FormatRendexRenderingWatchApi? Format { get; init; } = FormatRendexRenderingWatchApi.Png;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    [Minimum(320)]
    [Maximum(3840)]
    public int? Width { get; init; } = 1280;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    [Minimum(240)]
    [Maximum(2160)]
    public int? Height { get; init; } = 800;

    /// <summary>
    /// Defaults to true for watches (overrides the screenshot default of false) so the whole
    /// page is monitored — a viewport-only capture would miss changes below the fold. Set false
    /// (or use a selector) to scope down on purpose.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullPage")]
    public bool? FullPage { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public DeviceRendexRenderingWatchApi? Device { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deviceScaleFactor")]
    [Minimum(1.0)]
    [Maximum(3.0)]
    public double? DeviceScaleFactor { get; init; } = 2d;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("darkMode")]
    public bool? DarkMode { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockAds")]
    public bool? BlockAds { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockCookieBanners")]
    public bool? BlockCookieBanners { get; init; } = false;

    /// <summary>
    /// Remove these elements before capture
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hideSelectors")]
    [MaxLength(50)]
    public IReadOnlyList<string>? HideSelectors { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("waitUntil")]
    public WaitUntilRendexRenderingWatchApi? WaitUntil { get; init; } = WaitUntilRendexRenderingWatchApi.Networkidle2;

    /// <summary>
    /// Extra wait in milliseconds after the page is ready
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delay")]
    [Minimum(0)]
    [Maximum(10000)]
    public int? Delay { get; init; } = 0;

    /// <summary>
    /// Navigation timeout in seconds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeout")]
    [Minimum(5)]
    [Maximum(60)]
    public int? Timeout { get; init; } = 30;

    /// <summary>
    /// Pro+ — 2-letter ISO 3166-1 alpha-2 country code (e.g. <c>US</c>, <c>GB</c>; case-insensitive, upper-cased server-side) to render from. Cannot be combined with a text diffMode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geo")]
    [StringLength(2, MinimumLength = 2)]
    public string? Geo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geoCity")]
    public string? GeoCity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("geoState")]
    public string? GeoState { get; init; }

    /// <summary>
    /// Capture and diff ONLY this CSS element — watch just one price, banner, or section
    /// instead of the whole page. Visual-first (in text mode the extracted text is full-page).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("selector")]
    [MaxLength(500)]
    public string? Selector { get; init; }

    /// <summary>
    /// Pixel rectangles masked in BOTH captures before the visual diff — silence dynamic zones
    /// (an ad slot, a clock) so they never trip a change. Visual mode only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreRegions")]
    [MaxLength(20)]
    public IReadOnlyList<IgnoreRegion>? IgnoreRegions { get; init; }

    /// <summary>
    /// Substrings or <c>/regex/flags</c> patterns stripped from BOTH texts before the text diff —
    /// silence boilerplate (timestamps, view counts, session tokens). Applies to text/both modes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreText")]
    [MaxLength(50)]
    public IReadOnlyList<string>? IgnoreText { get; init; }

    /// <summary>
    /// Minimum added + removed characters for a text change to count — ignore tiny edits below
    /// the size you care about.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minTextChars")]
    [Minimum(0)]
    [Maximum(100000)]
    public int? MinTextChars { get; init; }

    /// <summary>
    /// While the page text contains any of these markers (e.g. "Out of stock", "Loading"), the
    /// run is treated as unchanged — no alert, no baseline drift — until the marker clears.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suppressWhilePresent")]
    [MaxLength(20)]
    public IReadOnlyList<string>? SuppressWhilePresent { get; init; }

    /// <summary>
    /// How the monitor presents its User-Agent. <c>auto</c> (default) identifies as RendexWatch and
    /// retries once with a standard browser identity if the page looks blocked; <c>identify</c>
    /// always identifies as RendexWatch and never falls back; <c>stealth</c> always presents a
    /// standard browser identity. See https://rendex.dev/bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uaMode")]
    public UaMode? UaMode { get; init; } = UaMode.Auto;
}
