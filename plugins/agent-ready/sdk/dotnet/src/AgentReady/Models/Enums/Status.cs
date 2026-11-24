using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

/// <summary>
/// Outcome of a single check.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Pass = new("pass");

    public static readonly Status Fail = new("fail");

    public static readonly Status Warn = new("warn");

    public static readonly Status Error = new("error");

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
