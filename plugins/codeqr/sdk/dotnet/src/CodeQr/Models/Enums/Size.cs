using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Size>))]
public sealed record Size : OpenStringEnum<Size>
{
    private Size(string value) : base(value)
    {
    }

    public static readonly Size S = new("s");

    public static readonly Size M = new("m");

    public static readonly Size L = new("l");

    public static readonly Size Xl = new("xl");

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
