using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// Defaults to open — the threads still needing action
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status12>))]
public sealed record Status12 : OpenStringEnum<Status12>
{
    private Status12(string value) : base(value)
    {
    }

    public static readonly Status12 Open = new("open");

    public static readonly Status12 Resolved = new("resolved");

    public static readonly Status12 All = new("all");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onResolved,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Resolved => onResolved(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onResolved, Action onAll, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Resolved) onResolved();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
