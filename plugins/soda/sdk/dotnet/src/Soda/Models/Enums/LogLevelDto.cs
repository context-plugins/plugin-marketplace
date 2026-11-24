using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LogLevelDto>))]
public sealed record LogLevelDto : OpenStringEnum<LogLevelDto>
{
    private LogLevelDto(string value) : base(value)
    {
    }

    public static readonly LogLevelDto Debug = new("debug");

    public static readonly LogLevelDto Info = new("info");

    public static readonly LogLevelDto Warning = new("warning");

    public static readonly LogLevelDto Error = new("error");

    public TResult Match<TResult>(Func<TResult> onDebug,
        Func<TResult> onInfo,
        Func<TResult> onWarning,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Debug => onDebug(),
            _ when this == Info => onInfo(),
            _ when this == Warning => onWarning(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onDebug, Action onInfo, Action onWarning, Action onError, Action<string> otherwise)
    {
        if (this == Debug) onDebug();
        else if (this == Info) onInfo();
        else if (this == Warning) onWarning();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
