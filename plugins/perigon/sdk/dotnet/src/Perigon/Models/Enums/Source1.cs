using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// How enrichment was initiated. Accepts MANUAL or BACKGROUND.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source1>))]
public sealed record Source1 : OpenStringEnum<Source1>
{
    private Source1(string value) : base(value)
    {
    }

    public static readonly Source1 Manual = new("MANUAL");

    public static readonly Source1 Background = new("BACKGROUND");

    public TResult Match<TResult>(Func<TResult> onManual,
        Func<TResult> onBackground,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == Background => onBackground(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual, Action onBackground, Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == Background) onBackground();
        else otherwise(Value);
    }
}
