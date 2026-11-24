using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// <c>started</c> claims a use before you act; <c>completed</c> or <c>failed</c> reports the outcome. Reporting <c>completed</c> without a <c>claimId</c> claims and reports in one
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Phase4>))]
public sealed record Phase4 : OpenStringEnum<Phase4>
{
    private Phase4(string value) : base(value)
    {
    }

    public static readonly Phase4 Started = new("started");

    public static readonly Phase4 Completed = new("completed");

    public static readonly Phase4 Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onStarted,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Started => onStarted(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStarted, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Started) onStarted();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
