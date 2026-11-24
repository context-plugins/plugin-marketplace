using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DriverLogLevels>))]
public sealed record DriverLogLevels : OpenStringEnum<DriverLogLevels>
{
    private DriverLogLevels(string value) : base(value)
    {
    }

    public static readonly DriverLogLevels LevelUnspecified = new("LEVEL_UNSPECIFIED");

    public static readonly DriverLogLevels All = new("ALL");

    public static readonly DriverLogLevels Trace = new("TRACE");

    public static readonly DriverLogLevels Debug = new("DEBUG");

    public static readonly DriverLogLevels Info = new("INFO");

    public static readonly DriverLogLevels Warn = new("WARN");

    public static readonly DriverLogLevels Error = new("ERROR");

    public static readonly DriverLogLevels Fatal = new("FATAL");

    public static readonly DriverLogLevels Off = new("OFF");

    public TResult Match<TResult>(Func<TResult> onLevelUnspecified,
        Func<TResult> onAll,
        Func<TResult> onTrace,
        Func<TResult> onDebug,
        Func<TResult> onInfo,
        Func<TResult> onWarn,
        Func<TResult> onError,
        Func<TResult> onFatal,
        Func<TResult> onOff,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LevelUnspecified => onLevelUnspecified(),
            _ when this == All => onAll(),
            _ when this == Trace => onTrace(),
            _ when this == Debug => onDebug(),
            _ when this == Info => onInfo(),
            _ when this == Warn => onWarn(),
            _ when this == Error => onError(),
            _ when this == Fatal => onFatal(),
            _ when this == Off => onOff(),
            _ => otherwise(Value)
        };

    public void Match(Action onLevelUnspecified,
        Action onAll,
        Action onTrace,
        Action onDebug,
        Action onInfo,
        Action onWarn,
        Action onError,
        Action onFatal,
        Action onOff,
        Action<string> otherwise)
    {
        if (this == LevelUnspecified) onLevelUnspecified();
        else if (this == All) onAll();
        else if (this == Trace) onTrace();
        else if (this == Debug) onDebug();
        else if (this == Info) onInfo();
        else if (this == Warn) onWarn();
        else if (this == Error) onError();
        else if (this == Fatal) onFatal();
        else if (this == Off) onOff();
        else otherwise(Value);
    }
}
