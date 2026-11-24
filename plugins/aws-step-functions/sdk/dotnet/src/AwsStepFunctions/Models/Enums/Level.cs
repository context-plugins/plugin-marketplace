using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Defines which category of execution history events are logged.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Level>))]
public sealed record Level : OpenStringEnum<Level>
{
    private Level(string value) : base(value)
    {
    }

    public static readonly Level All = new("ALL");

    public static readonly Level Error = new("ERROR");

    public static readonly Level Fatal = new("FATAL");

    public static readonly Level Off = new("OFF");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onError,
        Func<TResult> onFatal,
        Func<TResult> onOff,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Error => onError(),
            _ when this == Fatal => onFatal(),
            _ when this == Off => onOff(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onError, Action onFatal, Action onOff, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Error) onError();
        else if (this == Fatal) onFatal();
        else if (this == Off) onOff();
        else otherwise(Value);
    }
}
