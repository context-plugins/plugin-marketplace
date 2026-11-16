using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Connection>))]
public sealed record Connection : OpenStringEnum<Connection>
{
    private Connection(string value) : base(value)
    {
    }

    public static readonly Connection Closed = new("CLOSED");

    public static readonly Connection Open = new("OPEN");

    public TResult Match<TResult>(Func<TResult> onClosed, Func<TResult> onOpen, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Closed => onClosed(),
            _ when this == Open => onOpen(),
            _ => otherwise(Value)
        };

    public void Match(Action onClosed, Action onOpen, Action<string> otherwise)
    {
        if (this == Closed) onClosed();
        else if (this == Open) onOpen();
        else otherwise(Value);
    }
}
