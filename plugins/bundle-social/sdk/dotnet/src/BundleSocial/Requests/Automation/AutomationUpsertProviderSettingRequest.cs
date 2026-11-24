using BundleSocial.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Automation;

/// <summary>
/// The inputs of the AutomationUpsertProviderSetting operation.
/// </summary>
public sealed record AutomationUpsertProviderSettingRequest
{
    public required string SocialAccountId { get; init; }

    public required Type112 Type { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AutomationProviderSettingsRequest? Body { get; init; }
}
