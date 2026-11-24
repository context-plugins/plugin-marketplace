using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

/// <summary>
/// Outcome of a single check.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1AgentReadyScansApi>))]
public sealed record Status1AgentReadyScansApi : OpenStringEnum<Status1AgentReadyScansApi>
{
    private Status1AgentReadyScansApi(string value) : base(value)
    {
    }

    public static readonly Status1AgentReadyScansApi Pass = new("pass");

    public static readonly Status1AgentReadyScansApi Fail = new("fail");

    public static readonly Status1AgentReadyScansApi Warn = new("warn");

    public static readonly Status1AgentReadyScansApi Error = new("error");

    public TResult Match<TResult>(Func<TResult> onPass,
        Func<TResult> onFail,
        Func<TResult> onWarn,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pass => onPass(),
            _ when this == Fail => onFail(),
            _ when this == Warn => onWarn(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onPass, Action onFail, Action onWarn, Action onError, Action<string> otherwise)
    {
        if (this == Pass) onPass();
        else if (this == Fail) onFail();
        else if (this == Warn) onWarn();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
