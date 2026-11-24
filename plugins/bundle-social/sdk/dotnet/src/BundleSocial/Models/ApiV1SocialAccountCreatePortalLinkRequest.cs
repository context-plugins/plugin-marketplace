using System.Collections.Generic;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Core.Validation;
using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1SocialAccountCreatePortalLinkRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirectUrl")]
    [Format(FormatKind.Uri)]
    public string? RedirectUrl { get; init; }

    [JsonPropertyName("socialAccountTypes")]
    public required IReadOnlyList<SocialAccountTypeBundleSocialOrganizationApi> SocialAccountTypes { get; init; }

    /// <summary>
    /// Mastodon or Bluesky only. Required for Mastodon (the user's instance, e.g. https://mastodon.social). Optional for Bluesky - omit it to use the default issuer https://bsky.social, or pass a custom PDS/entryway issuer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverUrl")]
    [Format(FormatKind.Uri)]
    public string? ServerUrl { get; init; }

    /// <summary>
    /// Optional. If true, portal will request provider-specific anti-auto-login behavior where supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disableAutoLogin")]
    public bool? DisableAutoLogin { get; init; } = false;

    /// <summary>
    /// Optional and experimental. TikTok only. When true, portal routes TikTok authorization through logout to request a fresh login session.
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
    /// Optional. Facebook and Instagram only - when provided, portal skips business scope selection modal for Facebook login paths.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withBusinessScope")]
    public bool? WithBusinessScope { get; init; }

    /// <summary>
    /// Optional. Facebook and Instagram only - request the Meta messaging (DM) scopes. Ignored unless Instagram and Facebook direct messages are enabled for your organization (available on request).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withMessagingScope")]
    public bool? WithMessagingScope { get; init; }

    /// <summary>
    /// Time in minutes, after which the link will expire. Minimum 5 minutes, maximum 48 hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresIn")]
    [Minimum(5)]
    [Maximum(2880)]
    public int? ExpiresIn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoUrl")]
    [Format(FormatKind.Uri)]
    public string? LogoUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userLogoUrl")]
    [Format(FormatKind.Uri)]
    public string? UserLogoUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userName")]
    public string? UserName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("goBackButtonText")]
    public string? GoBackButtonText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hidePoweredBy")]
    public bool? HidePoweredBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hideGoBackButton")]
    public bool? HideGoBackButton { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hideUserLogo")]
    public bool? HideUserLogo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hideUserName")]
    public bool? HideUserName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hideLanguageSwitcher")]
    public bool? HideLanguageSwitcher { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showModalOnConnectSuccess")]
    public bool? ShowModalOnConnectSuccess { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public Language? Language { get; init; } = Language.En;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxSocialAccountsConnected")]
    public double? MaxSocialAccountsConnected { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
