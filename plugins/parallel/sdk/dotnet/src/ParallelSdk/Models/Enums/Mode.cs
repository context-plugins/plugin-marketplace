using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Turbo = new("turbo");

    public static readonly Mode Fast = new("fast");

    public static readonly Mode Basic = new("basic");

    public static readonly Mode Advanced = new("advanced");

    public TResult Match<TResult>(Func<TResult> onTurbo,
        Func<TResult> onFast,
        Func<TResult> onBasic,
        Func<TResult> onAdvanced,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Turbo => onTurbo(),
            _ when this == Fast => onFast(),
            _ when this == Basic => onBasic(),
            _ when this == Advanced => onAdvanced(),
            _ => otherwise(Value)
        };

    public void Match(Action onTurbo, Action onFast, Action onBasic, Action onAdvanced, Action<string> otherwise)
    {
        if (this == Turbo) onTurbo();
        else if (this == Fast) onFast();
        else if (this == Basic) onBasic();
        else if (this == Advanced) onAdvanced();
        else otherwise(Value);
    }
}
