using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CacheTime>))]
public sealed record CacheTime : OpenStringEnum<CacheTime>
{
    private CacheTime(string value) : base(value)
    {
    }

    public static readonly CacheTime _1D = new("1d");

    public static readonly CacheTime _7D = new("7d");

    public static readonly CacheTime _30D = new("30d");

    public TResult Match<TResult>(Func<TResult> on_1D,
        Func<TResult> on_7D,
        Func<TResult> on_30D,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1D => on_1D(),
            _ when this == _7D => on_7D(),
            _ when this == _30D => on_30D(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1D, Action on_7D, Action on_30D, Action<string> otherwise)
    {
        if (this == _1D) on_1D();
        else if (this == _7D) on_7D();
        else if (this == _30D) on_30D();
        else otherwise(Value);
    }
}
