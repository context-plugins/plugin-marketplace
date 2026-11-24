using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Current online/offline status of the Atom.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Online = new("ONLINE");

    public static readonly Status Offline = new("OFFLINE");

    public static readonly Status Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onOnline,
        Func<TResult> onOffline,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Online => onOnline(),
            _ when this == Offline => onOffline(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnline, Action onOffline, Action onUnknown, Action<string> otherwise)
    {
        if (this == Online) onOnline();
        else if (this == Offline) onOffline();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
