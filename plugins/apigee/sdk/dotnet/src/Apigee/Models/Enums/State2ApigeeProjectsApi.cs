using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The state of the addon.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State2ApigeeProjectsApi>))]
public sealed record State2ApigeeProjectsApi : OpenStringEnum<State2ApigeeProjectsApi>
{
    private State2ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly State2ApigeeProjectsApi AddonStateUnspecified = new("ADDON_STATE_UNSPECIFIED");

    public static readonly State2ApigeeProjectsApi Active = new("ACTIVE");

    public static readonly State2ApigeeProjectsApi Updating = new("UPDATING");

    public static readonly State2ApigeeProjectsApi Error = new("ERROR");

    public static readonly State2ApigeeProjectsApi Inactive = new("INACTIVE");

    public TResult Match<TResult>(Func<TResult> onAddonStateUnspecified,
        Func<TResult> onActive,
        Func<TResult> onUpdating,
        Func<TResult> onError,
        Func<TResult> onInactive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AddonStateUnspecified => onAddonStateUnspecified(),
            _ when this == Active => onActive(),
            _ when this == Updating => onUpdating(),
            _ when this == Error => onError(),
            _ when this == Inactive => onInactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onAddonStateUnspecified,
        Action onActive,
        Action onUpdating,
        Action onError,
        Action onInactive,
        Action<string> otherwise)
    {
        if (this == AddonStateUnspecified) onAddonStateUnspecified();
        else if (this == Active) onActive();
        else if (this == Updating) onUpdating();
        else if (this == Error) onError();
        else if (this == Inactive) onInactive();
        else otherwise(Value);
    }
}
