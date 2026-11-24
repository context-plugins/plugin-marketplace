using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Log level.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Level>))]
public sealed record Level : OpenStringEnum<Level>
{
    private Level(string value) : base(value)
    {
    }

    public static readonly Level Info = new("info");

    public static readonly Level Warn = new("warn");

    public static readonly Level Error = new("error");

    public static readonly Level Debug = new("debug");

    public TResult Match<TResult>(Func<TResult> onInfo,
        Func<TResult> onWarn,
        Func<TResult> onError,
        Func<TResult> onDebug,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Info => onInfo(),
            _ when this == Warn => onWarn(),
            _ when this == Error => onError(),
            _ when this == Debug => onDebug(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfo, Action onWarn, Action onError, Action onDebug, Action<string> otherwise)
    {
        if (this == Info) onInfo();
        else if (this == Warn) onWarn();
        else if (this == Error) onError();
        else if (this == Debug) onDebug();
        else otherwise(Value);
    }
}
