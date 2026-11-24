using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Active = new("active");

    public static readonly Status Suspended = new("suspended");

    public static readonly Status Closed = new("closed");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onSuspended,
        Func<TResult> onClosed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Suspended => onSuspended(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onSuspended, Action onClosed, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Suspended) onSuspended();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
