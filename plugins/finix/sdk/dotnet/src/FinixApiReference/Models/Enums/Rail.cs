using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The method of adjustment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Rail>))]
public sealed record Rail : OpenStringEnum<Rail>
{
    private Rail(string value) : base(value)
    {
    }

    public static readonly Rail Ach = new("ACH");

    public TResult Match<TResult>(Func<TResult> onAch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ach => onAch(),
            _ => otherwise(Value)
        };

    public void Match(Action onAch, Action<string> otherwise)
    {
        if (this == Ach) onAch();
        else otherwise(Value);
    }
}
