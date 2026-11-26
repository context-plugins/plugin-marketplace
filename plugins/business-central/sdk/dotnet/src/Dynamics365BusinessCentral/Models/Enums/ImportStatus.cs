using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Enum;

namespace Dynamics365BusinessCentral.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ImportStatus>))]
public sealed record ImportStatus : OpenStringEnum<ImportStatus>
{
    private ImportStatus(string value) : base(value)
    {
    }

    public static readonly ImportStatus InProgress = new("InProgress");

    public static readonly ImportStatus Completed = new("Completed");

    public static readonly ImportStatus Error = new("Error");

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
