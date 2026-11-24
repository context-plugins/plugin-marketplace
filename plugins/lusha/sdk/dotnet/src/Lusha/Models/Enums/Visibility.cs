using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Visibility>))]
public sealed record Visibility : OpenStringEnum<Visibility>
{
    private Visibility(string value) : base(value)
    {
    }

    public static readonly Visibility Private = new("private");

    public static readonly Visibility Shared = new("shared");

    public TResult Match<TResult>(Func<TResult> onPrivate, Func<TResult> onShared, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Private => onPrivate(),
            _ when this == Shared => onShared(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivate, Action onShared, Action<string> otherwise)
    {
        if (this == Private) onPrivate();
        else if (this == Shared) onShared();
        else otherwise(Value);
    }
}
