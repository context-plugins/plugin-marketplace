using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Browser config, owned by the browser row (never the run). Follow-ups:
/// omitted fields inherit the session's prior browser; explicit values apply
/// only to newly provisioned browsers (a live browser is reused as-is).
/// Profile is the exception: a different profile → 400; an explicit value
/// mismatching the live browser's profile (incl. null vs a profiled browser)
/// declines reuse and provisions fresh. A live browser already matching the
/// requested profile is reused. Extensions are session-wide: follow-ups
/// inherit them, and a different set → 400 (see extensionIds).
/// </summary>
public record RunBrowserSettings
{
    /// <summary>
    /// ID of a browser profile to load into the session. Profiles persist cookies, local storage, and other browser state across sessions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profileId")]
    public ProfileidModel? ProfileId { get; init; }

    /// <summary>
    /// ISO country code to proxy the browser through. Defaults to US. Pass null to run without a proxy.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyCountryCode")]
    public ProxyCountryCode1Model? ProxyCountryCode { get; init; }

    /// <summary>
    /// Custom proxy for the browser. Overrides proxyCountryCode. Never stored or inherited by follow-up runs; pass it on each run that should use it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customProxy")]
    public CustomProxy1? CustomProxy { get; init; }

    /// <summary>
    /// Custom screen width in pixels for the browser.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenWidth")]
    public Screenwidth? ScreenWidth { get; init; }

    /// <summary>
    /// Custom screen height in pixels for the browser.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("screenHeight")]
    public Screenheight? ScreenHeight { get; init; }

    /// <summary>
    /// Let you or the agent resize the browser window over CDP. Resizing makes the browser easier to detect. API runs default to off. Follow-up runs inherit the value of the previous browser. The value applies only when the run starts a new browser.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowResizing")]
    public Allowresizing? AllowResizing { get; init; }

    /// <summary>
    /// Record the browser session to an mp4, retrievable via GET /browsers/{id} once the browser stops. API runs default to off; pass true to enable. Like other browser settings, this only applies when a new browser is provisioned: a follow-up that reuses the session's live browser keeps that browser's recording state. Ignored (always off) for Zero Data Retention projects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("record")]
    public Record? Record { get; init; }

    /// <summary>
    /// Up to 3 ready extensions from POST /api/v4/extensions to install in every browser of the session. Follow-up runs inherit the session's extensions; passing a different set returns 400. After you delete an extension, omit extensionIds or pass the reduced set; later browsers skip deleted extensions. The agent is not told about installed extensions, so name any extension pages in the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extensionIds")]
    [MaxLength(3)]
    public IReadOnlyList<Guid>? ExtensionIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
