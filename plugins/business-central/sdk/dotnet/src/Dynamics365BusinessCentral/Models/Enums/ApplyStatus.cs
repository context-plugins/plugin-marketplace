using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ApplyStatus>))]
public sealed record ApplyStatus : OpenStringEnum<ApplyStatus>
{
    private ApplyStatus(string value) : base(value)
    {
    }

    public static readonly ApplyStatus InProgress = new("InProgress");

    public static readonly ApplyStatus Completed = new("Completed");

    public static readonly ApplyStatus Error = new("Error");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onCompleted, Action onError, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
