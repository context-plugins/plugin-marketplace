using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The type of information to log for the Event API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogLevelEnum>))]
public sealed record LogLevelEnum : OpenStringEnum<LogLevelEnum>
{
    private LogLevelEnum(string value) : base(value)
    {
    }

    public static readonly LogLevelEnum None = new("NONE");

    public static readonly LogLevelEnum Error = new("ERROR");

    public static readonly LogLevelEnum All = new("ALL");

    public static readonly LogLevelEnum Info = new("INFO");

    public static readonly LogLevelEnum Debug = new("DEBUG");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onError,
        Func<TResult> onAll,
        Func<TResult> onInfo,
        Func<TResult> onDebug,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Error => onError(),
            _ when this == All => onAll(),
            _ when this == Info => onInfo(),
            _ when this == Debug => onDebug(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onError,
        Action onAll,
        Action onInfo,
        Action onDebug,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Error) onError();
        else if (this == All) onAll();
        else if (this == Info) onInfo();
        else if (this == Debug) onDebug();
        else otherwise(Value);
    }
}
