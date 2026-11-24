using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// English variety to enforce, e.g. "us-variety" or "gb-variety". Optional.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Variety>))]
public sealed record Variety : OpenStringEnum<Variety>
{
    private Variety(string value) : base(value)
    {
    }

    public static readonly Variety UsVariety = new("us-variety");

    public static readonly Variety GbVariety = new("gb-variety");

    public static readonly Variety AuVariety = new("au-variety");

    public static readonly Variety CaVariety = new("ca-variety");

    public static readonly Variety SVariety = new("s-variety");

    public static readonly Variety TVariety = new("t-variety");

    public static readonly Variety NullVariety = new("null-variety");

    public TResult Match<TResult>(Func<TResult> onUsVariety,
        Func<TResult> onGbVariety,
        Func<TResult> onAuVariety,
        Func<TResult> onCaVariety,
        Func<TResult> onSVariety,
        Func<TResult> onTVariety,
        Func<TResult> onNullVariety,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UsVariety => onUsVariety(),
            _ when this == GbVariety => onGbVariety(),
            _ when this == AuVariety => onAuVariety(),
            _ when this == CaVariety => onCaVariety(),
            _ when this == SVariety => onSVariety(),
            _ when this == TVariety => onTVariety(),
            _ when this == NullVariety => onNullVariety(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsVariety,
        Action onGbVariety,
        Action onAuVariety,
        Action onCaVariety,
        Action onSVariety,
        Action onTVariety,
        Action onNullVariety,
        Action<string> otherwise)
    {
        if (this == UsVariety) onUsVariety();
        else if (this == GbVariety) onGbVariety();
        else if (this == AuVariety) onAuVariety();
        else if (this == CaVariety) onCaVariety();
        else if (this == SVariety) onSVariety();
        else if (this == TVariety) onTVariety();
        else if (this == NullVariety) onNullVariety();
        else otherwise(Value);
    }
}
