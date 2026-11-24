using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// The user's permission level for the site.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PermissionLevel>))]
public sealed record PermissionLevel : OpenStringEnum<PermissionLevel>
{
    private PermissionLevel(string value) : base(value)
    {
    }

    public static readonly PermissionLevel SitePermissionLevelUnspecified = new("SITE_PERMISSION_LEVEL_UNSPECIFIED");

    public static readonly PermissionLevel SiteOwner = new("SITE_OWNER");

    public static readonly PermissionLevel SiteFullUser = new("SITE_FULL_USER");

    public static readonly PermissionLevel SiteRestrictedUser = new("SITE_RESTRICTED_USER");

    public static readonly PermissionLevel SiteUnverifiedUser = new("SITE_UNVERIFIED_USER");

    public TResult Match<TResult>(Func<TResult> onSitePermissionLevelUnspecified,
        Func<TResult> onSiteOwner,
        Func<TResult> onSiteFullUser,
        Func<TResult> onSiteRestrictedUser,
        Func<TResult> onSiteUnverifiedUser,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SitePermissionLevelUnspecified => onSitePermissionLevelUnspecified(),
            _ when this == SiteOwner => onSiteOwner(),
            _ when this == SiteFullUser => onSiteFullUser(),
            _ when this == SiteRestrictedUser => onSiteRestrictedUser(),
            _ when this == SiteUnverifiedUser => onSiteUnverifiedUser(),
            _ => otherwise(Value)
        };

    public void Match(Action onSitePermissionLevelUnspecified,
        Action onSiteOwner,
        Action onSiteFullUser,
        Action onSiteRestrictedUser,
        Action onSiteUnverifiedUser,
        Action<string> otherwise)
    {
        if (this == SitePermissionLevelUnspecified) onSitePermissionLevelUnspecified();
        else if (this == SiteOwner) onSiteOwner();
        else if (this == SiteFullUser) onSiteFullUser();
        else if (this == SiteRestrictedUser) onSiteRestrictedUser();
        else if (this == SiteUnverifiedUser) onSiteUnverifiedUser();
        else otherwise(Value);
    }
}
