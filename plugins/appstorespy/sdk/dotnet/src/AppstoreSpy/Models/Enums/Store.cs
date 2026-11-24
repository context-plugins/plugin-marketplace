using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Store>))]
public sealed record Store : OpenStringEnum<Store>
{
    private Store(string value) : base(value)
    {
    }

    public static readonly Store Play = new("play");

    public static readonly Store Ios = new("ios");

    public TResult Match<TResult>(Func<TResult> onPlay, Func<TResult> onIos, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Play => onPlay(),
            _ when this == Ios => onIos(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlay, Action onIos, Action<string> otherwise)
    {
        if (this == Play) onPlay();
        else if (this == Ios) onIos();
        else otherwise(Value);
    }
}
