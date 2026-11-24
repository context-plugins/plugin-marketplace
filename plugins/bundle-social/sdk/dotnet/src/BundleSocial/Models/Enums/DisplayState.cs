using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DisplayState>))]
public sealed record DisplayState : OpenStringEnum<DisplayState>
{
    private DisplayState(string value) : base(value)
    {
    }

    public static readonly DisplayState Active = new("active");

    public static readonly DisplayState ThreadDeleted = new("thread_deleted");

    public static readonly DisplayState PlatformMissing = new("platform_missing");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onThreadDeleted,
        Func<TResult> onPlatformMissing,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == ThreadDeleted => onThreadDeleted(),
            _ when this == PlatformMissing => onPlatformMissing(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onThreadDeleted, Action onPlatformMissing, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == ThreadDeleted) onThreadDeleted();
        else if (this == PlatformMissing) onPlatformMissing();
        else otherwise(Value);
    }
}
