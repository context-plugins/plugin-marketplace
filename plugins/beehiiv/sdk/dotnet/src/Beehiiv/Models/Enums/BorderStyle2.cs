using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The border style of the block.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BorderStyle2>))]
public sealed record BorderStyle2 : OpenStringEnum<BorderStyle2>
{
    private BorderStyle2(string value) : base(value)
    {
    }

    public static readonly BorderStyle2 Solid = new("solid");

    public static readonly BorderStyle2 Dashed = new("dashed");

    public static readonly BorderStyle2 Dotted = new("dotted");

    public TResult Match<TResult>(Func<TResult> onSolid,
        Func<TResult> onDashed,
        Func<TResult> onDotted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Solid => onSolid(),
            _ when this == Dashed => onDashed(),
            _ when this == Dotted => onDotted(),
            _ => otherwise(Value)
        };

    public void Match(Action onSolid, Action onDashed, Action onDotted, Action<string> otherwise)
    {
        if (this == Solid) onSolid();
        else if (this == Dashed) onDashed();
        else if (this == Dotted) onDotted();
        else otherwise(Value);
    }
}
