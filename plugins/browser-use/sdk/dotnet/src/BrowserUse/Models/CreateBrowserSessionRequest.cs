using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Request model for creating a browser session.
/// </summary>
public record CreateBrowserSessionRequest
{
    /// <summary>
    /// The ID of the profile to use for the session
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profileId")]
    public ProfileId? ProfileId { get; init; }

    /// <summary>
    /// Country code for proxy location. Defaults to US. Set to null to disable proxy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyCountryCode")]
    public ProxyCountryCode1? ProxyCountryCode { get; init; }

    /// <summary>
    /// Labels for this browser. Up to 10 key-value pairs. Filterable on the browsers list and in the dashboard history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata? Metadata { get; init; }

    /// <summary>
    /// The timeout for the session in minutes. All users can use up to 240 minutes (4 hours). Browser sessions are charged $0.02/hour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeout")]
    public int? Timeout { get; init; } = 60;

    /// <summary>
    /// Custom screen width in pixels for the browser.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("browserScreenWidth")]
    public BrowserScreenWidth? BrowserScreenWidth { get; init; }

    /// <summary>
    /// Custom screen height in pixels for the browser.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("browserScreenHeight")]
    public BrowserScreenHeight? BrowserScreenHeight { get; init; }

    /// <summary>
    /// Whether to allow the browser to be resized during the session (not recommended since it reduces stealthiness).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowResizing")]
    public bool? AllowResizing { get; init; } = false;

    /// <summary>
    /// Whether Chrome renders PDFs in a tab. Set to false to stop the in-tab render; the file is saved to the session's download directory either way.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pdfRendererEnabled")]
    public bool? PdfRendererEnabled { get; init; } = true;

    /// <summary>
    /// Whether the browser detects and solves CAPTCHAs on its own. Set to false to handle CAPTCHAs yourself. Defaults to true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("solveCaptchas")]
    public bool? SolveCaptchas { get; init; } = true;

    /// <summary>
    /// Custom proxy settings to use for the session. If not provided, our proxies will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customProxy")]
    public CustomProxy? CustomProxy { get; init; }

    /// <summary>
    /// If True, enables session recording. Defaults to False.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableRecording")]
    public bool? EnableRecording { get; init; } = false;

    /// <summary>
    /// Up to 3 ready extensions from POST /api/v4/extensions to install before the browser starts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extensionIds")]
    [MaxLength(3)]
    public IReadOnlyList<Guid>? ExtensionIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
