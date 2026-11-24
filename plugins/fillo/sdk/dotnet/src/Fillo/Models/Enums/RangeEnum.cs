using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RangeEnum>))]
public sealed record RangeEnum : OpenStringEnum<RangeEnum>
{
    private RangeEnum(string value) : base(value)
    {
    }

    public static readonly RangeEnum _7D = new("7d");

    public static readonly RangeEnum _30D = new("30d");

    public static readonly RangeEnum _90D = new("90d");

    public static readonly RangeEnum All = new("all");

    public TResult Match<TResult>(Func<TResult> on_7D,
        Func<TResult> on_30D,
        Func<TResult> on_90D,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _7D => on_7D(),
            _ when this == _30D => on_30D(),
            _ when this == _90D => on_90D(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action on_7D, Action on_30D, Action on_90D, Action onAll, Action<string> otherwise)
    {
        if (this == _7D) on_7D();
        else if (this == _30D) on_30D();
        else if (this == _90D) on_90D();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
