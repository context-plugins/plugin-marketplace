using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Ok = new("ok");

    public static readonly Status1 Degraded = new("degraded");

    public TResult Match<TResult>(Func<TResult> onOk, Func<TResult> onDegraded, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Degraded => onDegraded(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onDegraded, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Degraded) onDegraded();
        else otherwise(Value);
    }
}
