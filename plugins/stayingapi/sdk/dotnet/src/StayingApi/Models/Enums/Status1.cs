using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Pending = new("pending");

    public TResult Match<TResult>(Func<TResult> onPending, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else otherwise(Value);
    }
}
