using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Truncation>))]
public sealed record Truncation : OpenStringEnum<Truncation>
{
    private Truncation(string value) : base(value)
    {
    }

    public static readonly Truncation Auto = new("auto");

    public static readonly Truncation Disabled = new("disabled");

    public TResult Match<TResult>(Func<TResult> onAuto, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto, Action onDisabled, Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
