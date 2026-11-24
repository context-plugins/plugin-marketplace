using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<GenerateContractOperationStateDto>))]
public sealed record GenerateContractOperationStateDto : OpenStringEnum<GenerateContractOperationStateDto>
{
    private GenerateContractOperationStateDto(string value) : base(value)
    {
    }

    public static readonly GenerateContractOperationStateDto Ongoing = new("ongoing");

    public static readonly GenerateContractOperationStateDto Completed = new("completed");

    public static readonly GenerateContractOperationStateDto Failed = new("failed");

    public static readonly GenerateContractOperationStateDto Canceled = new("canceled");

    public TResult Match<TResult>(Func<TResult> onOngoing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCanceled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ongoing => onOngoing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Canceled => onCanceled(),
            _ => otherwise(Value)
        };

    public void Match(Action onOngoing,
        Action onCompleted,
        Action onFailed,
        Action onCanceled,
        Action<string> otherwise)
    {
        if (this == Ongoing) onOngoing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Canceled) onCanceled();
        else otherwise(Value);
    }
}
