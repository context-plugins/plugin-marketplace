using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Open = new("open");

    public static readonly Status Awarded = new("awarded");

    public TResult Match<TResult>(Func<TResult> onOpen, Func<TResult> onAwarded, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Awarded => onAwarded(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onAwarded, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Awarded) onAwarded();
        else otherwise(Value);
    }
}
