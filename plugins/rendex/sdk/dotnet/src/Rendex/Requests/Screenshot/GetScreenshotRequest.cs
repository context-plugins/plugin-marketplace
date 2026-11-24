using System.ComponentModel.DataAnnotations;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Requests.Screenshot;

/// <summary>
/// The inputs of the GetScreenshot operation.
/// </summary>
public sealed record GetScreenshotRequest
{
    /// <summary>
    /// Webpage URL to capture (must be a valid URL)
    /// </summary>
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Output format
    /// </summary>
    public Format1 Format { get; init; } = Format1.Png;

    /// <summary>
    /// Viewport width in pixels
    /// </summary>
    [Minimum(320)]
    [Maximum(3840)]
    public int Width { get; init; } = 1280;

    /// <summary>
    /// Viewport height in pixels
    /// </summary>
    [Minimum(240)]
    [Maximum(2160)]
    public int Height { get; init; } = 800;

    /// <summary>
    /// Capture full scrollable page (capped at 16384px height)
    /// </summary>
    public bool FullPage { get; init; } = false;

    /// <summary>
    /// Image quality (JPEG and WebP only)
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int? Quality { get; init; }

    /// <summary>
    /// Wait milliseconds after page load before capture
    /// </summary>
    [Minimum(0)]
    [Maximum(10000)]
    public int Delay { get; init; } = 0;

    /// <summary>
    /// Emulate dark color scheme (prefers-color-scheme: dark)
    /// </summary>
    public bool DarkMode { get; init; } = false;

    /// <summary>
    /// Device pixel ratio (2 for Retina, 3 for high-DPI)
    /// </summary>
    [Minimum(1.0)]
    [Maximum(3.0)]
    public double DeviceScaleFactor { get; init; } = 2d;

    /// <summary>
    /// Block ads, trackers, and chat widgets
    /// </summary>
    public bool BlockAds { get; init; } = true;

    /// <summary>
    /// Navigation timeout in seconds
    /// </summary>
    [Minimum(5)]
    [Maximum(60)]
    public int Timeout { get; init; } = 30;

    /// <summary>
    /// Page readiness condition before capture
    /// </summary>
    public WaitUntil1 WaitUntil { get; init; } = WaitUntil1.Networkidle2;

    /// <summary>
    /// CSS selector to wait for before capture
    /// </summary>
    [MaxLength(500)]
    public string? WaitForSelector { get; init; }

    /// <summary>
    /// Return partial screenshot on timeout instead of failing
    /// </summary>
    public bool BestAttempt { get; init; } = true;

    /// <summary>
    /// CSS selector of element to capture instead of full page
    /// </summary>
    [MaxLength(500)]
    public string? Selector { get; init; }

    /// <summary>
    /// Device preset that sets viewport, scale, and user agent in one parameter
    /// </summary>
    public Device1? Device { get; init; }

    /// <summary>
    /// Hide common cookie and consent walls before capture
    /// </summary>
    public bool BlockCookieBanners { get; init; } = false;

    /// <summary>
    /// Downscale the output to this width (image formats only). Aspect ratio preserved when only one dimension is set. Never upscales.
    /// </summary>
    [Minimum(16)]
    [Maximum(3840)]
    public int? ResizeWidth { get; init; }

    /// <summary>
    /// Downscale the output to this height (image formats only).
    /// </summary>
    [Minimum(16)]
    [Maximum(2160)]
    public int? ResizeHeight { get; init; }

    /// <summary>
    /// API key (alternative to Authorization header)
    /// </summary>
    public string? Key { get; init; }
}
