using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Ok = new("ok");

    public TResult Match<TResult>(Func<TResult> onOk, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else otherwise(Value);
    }
}
