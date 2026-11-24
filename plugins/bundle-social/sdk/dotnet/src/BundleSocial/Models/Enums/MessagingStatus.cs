using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MessagingStatus>))]
public sealed record MessagingStatus : OpenStringEnum<MessagingStatus>
{
    private MessagingStatus(string value) : base(value)
    {
    }

    public static readonly MessagingStatus Disabled = new("DISABLED");

    public static readonly MessagingStatus Enabled = new("ENABLED");

    public static readonly MessagingStatus DisablePending = new("DISABLE_PENDING");

    public TResult Match<TResult>(Func<TResult> onDisabled,
        Func<TResult> onEnabled,
        Func<TResult> onDisablePending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disabled => onDisabled(),
            _ when this == Enabled => onEnabled(),
            _ when this == DisablePending => onDisablePending(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisabled, Action onEnabled, Action onDisablePending, Action<string> otherwise)
    {
        if (this == Disabled) onDisabled();
        else if (this == Enabled) onEnabled();
        else if (this == DisablePending) onDisablePending();
        else otherwise(Value);
    }
}
