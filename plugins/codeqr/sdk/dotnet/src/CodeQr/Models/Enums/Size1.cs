using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// Font size preset for the frame label. <c>s</c> = 60 viewBox units, <c>m</c> = 89.1 (default), <c>l</c> = 120, <c>xl</c> = 150. Larger sizes grow the frame bar vertically to fit. Extremely long text auto-shrinks to keep within 4 lines (floor 48).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Size1>))]
public sealed record Size1 : OpenStringEnum<Size1>
{
    private Size1(string value) : base(value)
    {
    }

    public static readonly Size1 S = new("s");

    public static readonly Size1 M = new("m");

    public static readonly Size1 L = new("l");

    public static readonly Size1 Xl = new("xl");

    public TResult Match<TResult>(Func<TResult> onS,
        Func<TResult> onM,
        Func<TResult> onL,
        Func<TResult> onXl,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == S => onS(),
            _ when this == M => onM(),
            _ when this == L => onL(),
            _ when this == Xl => onXl(),
            _ => otherwise(Value)
        };

    public void Match(Action onS, Action onM, Action onL, Action onXl, Action<string> otherwise)
    {
        if (this == S) onS();
        else if (this == M) onM();
        else if (this == L) onL();
        else if (this == Xl) onXl();
        else otherwise(Value);
    }
}
