using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Pending = new("pending");

    public static readonly Status2 Notified = new("notified");

    public static readonly Status2 Signed = new("signed");

    public static readonly Status2 Declined = new("declined");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onNotified,
        Func<TResult> onSigned,
        Func<TResult> onDeclined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Notified => onNotified(),
            _ when this == Signed => onSigned(),
            _ when this == Declined => onDeclined(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onNotified, Action onSigned, Action onDeclined, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Notified) onNotified();
        else if (this == Signed) onSigned();
        else if (this == Declined) onDeclined();
        else otherwise(Value);
    }
}
