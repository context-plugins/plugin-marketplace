using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Operation2>))]
public sealed record Operation2 : OpenStringEnum<Operation2>
{
    private Operation2(string value) : base(value)
    {
    }

    public static readonly Operation2 Create = new("create");

    public static readonly Operation2 Update = new("update");

    public TResult Match<TResult>(Func<TResult> onCreate, Func<TResult> onUpdate, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Create => onCreate(),
            _ when this == Update => onUpdate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreate, Action onUpdate, Action<string> otherwise)
    {
        if (this == Create) onCreate();
        else if (this == Update) onUpdate();
        else otherwise(Value);
    }
}
