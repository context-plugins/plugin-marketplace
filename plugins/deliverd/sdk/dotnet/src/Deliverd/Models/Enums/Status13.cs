using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status13>))]
public sealed record Status13 : OpenStringEnum<Status13>
{
    private Status13(string value) : base(value)
    {
    }

    public static readonly Status13 Open = new("open");

    public static readonly Status13 Resolved = new("resolved");

    public TResult Match<TResult>(Func<TResult> onOpen, Func<TResult> onResolved, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Resolved => onResolved(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onResolved, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Resolved) onResolved();
        else otherwise(Value);
    }
}
