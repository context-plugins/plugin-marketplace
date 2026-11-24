using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Task status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DidlogicComRiskChecksApi>))]
public sealed record Status1DidlogicComRiskChecksApi : OpenStringEnum<Status1DidlogicComRiskChecksApi>
{
    private Status1DidlogicComRiskChecksApi(string value) : base(value)
    {
    }

    public static readonly Status1DidlogicComRiskChecksApi Pending = new("pending");

    public static readonly Status1DidlogicComRiskChecksApi Completed = new("completed");

    public static readonly Status1DidlogicComRiskChecksApi Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
