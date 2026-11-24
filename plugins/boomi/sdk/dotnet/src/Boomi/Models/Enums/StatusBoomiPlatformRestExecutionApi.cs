using System;
using System.Text.Json.Serialization;
using Boomi.Core.Enum;

namespace Boomi.Models.Enums;

/// <summary>
/// Final status of the execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusBoomiPlatformRestExecutionApi>))]
public sealed record StatusBoomiPlatformRestExecutionApi : OpenStringEnum<StatusBoomiPlatformRestExecutionApi>
{
    private StatusBoomiPlatformRestExecutionApi(string value) : base(value)
    {
    }

    public static readonly StatusBoomiPlatformRestExecutionApi Complete = new("COMPLETE");

    public static readonly StatusBoomiPlatformRestExecutionApi Error = new("ERROR");

    public static readonly StatusBoomiPlatformRestExecutionApi Inprocess = new("INPROCESS");

    public static readonly StatusBoomiPlatformRestExecutionApi Aborted = new("ABORTED");

    public static readonly StatusBoomiPlatformRestExecutionApi Discarded = new("DISCARDED");

    public TResult Match<TResult>(Func<TResult> onComplete,
        Func<TResult> onError,
        Func<TResult> onInprocess,
        Func<TResult> onAborted,
        Func<TResult> onDiscarded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Complete => onComplete(),
            _ when this == Error => onError(),
            _ when this == Inprocess => onInprocess(),
            _ when this == Aborted => onAborted(),
            _ when this == Discarded => onDiscarded(),
            _ => otherwise(Value)
        };

    public void Match(Action onComplete,
        Action onError,
        Action onInprocess,
        Action onAborted,
        Action onDiscarded,
        Action<string> otherwise)
    {
        if (this == Complete) onComplete();
        else if (this == Error) onError();
        else if (this == Inprocess) onInprocess();
        else if (this == Aborted) onAborted();
        else if (this == Discarded) onDiscarded();
        else otherwise(Value);
    }
}
