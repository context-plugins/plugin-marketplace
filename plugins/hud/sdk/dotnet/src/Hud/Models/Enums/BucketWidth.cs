using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BucketWidth>))]
public sealed record BucketWidth : OpenStringEnum<BucketWidth>
{
    private BucketWidth(string value) : base(value)
    {
    }

    public static readonly BucketWidth _1H = new("1h");

    public static readonly BucketWidth _1D = new("1d");

    public TResult Match<TResult>(Func<TResult> on_1H, Func<TResult> on_1D, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1H => on_1H(),
            _ when this == _1D => on_1D(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1H, Action on_1D, Action<string> otherwise)
    {
        if (this == _1H) on_1H();
        else if (this == _1D) on_1D();
        else otherwise(Value);
    }
}
