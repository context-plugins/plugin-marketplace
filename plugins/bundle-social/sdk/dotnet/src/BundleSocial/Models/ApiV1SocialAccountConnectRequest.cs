using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1SocialAccountConnectRequest
{
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// Client-provided return URL. After the OAuth flow completes (success or error), the user will be redirected here with success/error query params appended. Must be a well-formed http/https URL.
    /// </summary>
    [JsonPropertyName("redirectUrl")]
    [Format(FormatKind.Uri)]
    public required string RedirectUrl { get; init; }

    /// <summary>
    /// Mastodon or Bluesky only. Required for Mastodon (the user's instance, e.g. https://mastodon.social). Optional for Bluesky - omit it to use the default issuer https://bsky.social, or pass a custom PDS/entryway issuer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverUrl")]
    [Format(FormatKind.Uri)]
    public string? ServerUrl { get; init; }

    /// <summary>
    /// Optional. When true, adds provider-specific flags to avoid automatic login/auto-approval where supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableAutoLogin")]
    public bool? DisableAutoLogin { get; init; } = false;

    /// <summary>
    /// Optional and experimental. TikTok only. When true, routes authorization through TikTok logout to request a fresh login session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tiktokForceLogin")]
    public bool? TiktokForceLogin { get; init; } = false;

    /// <summary>
    /// Optional. Instagram direct OAuth only. When true, Instagram asks for a fresh login instead of reusing the account logged in on that browser. In the hosted portal it applies only on iPhone/iPad. Staying in the browser on iOS is the default for every connection and needs no flag.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forceBrowserOAuth")]
    public bool? ForceBrowserOAuth { get; init; } = false;

    /// <summary>
    /// Instagram only - connection method
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instagramConnectionMethod")]
    public InstagramConnectionMethodBundleSocialSocialAccountApi? InstagramConnectionMethod { get; init; }

    /// <summary>
    /// Facebook and Instagram: include business_management, ads_management, ads_read scopes. YouTube: include the monetary analytics scope (enables revenue/monetization data).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withBusinessScope")]
    public bool? WithBusinessScope { get; init; } = false;

    /// <summary>
    /// Facebook and Instagram: include the Meta messaging (DM) scopes. Ignored unless messaging is enabled for your organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withMessagingScope")]
    public bool? WithMessagingScope { get; init; } = false;

    /// <summary>
    /// Re-authorize the account already connected to this team in place: tokens and permissions are refreshed while the account, its posts and scheduled destinations stay. The user must log in with the same account. Currently supported for Instagram connected with instagramConnectionMethod INSTAGRAM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reconnect")]
    public bool? Reconnect { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
