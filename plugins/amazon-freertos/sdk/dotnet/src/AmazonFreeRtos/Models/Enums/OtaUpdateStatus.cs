using System;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Enum;

namespace AmazonFreeRtos.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<OtaUpdateStatus>))]
public sealed record OtaUpdateStatus : OpenStringEnum<OtaUpdateStatus>
{
    private OtaUpdateStatus(string value) : base(value)
    {
    }

    public static readonly OtaUpdateStatus CreatePending = new("CREATE_PENDING");

    public static readonly OtaUpdateStatus CreateInProgress = new("CREATE_IN_PROGRESS");

    public static readonly OtaUpdateStatus CreateComplete = new("CREATE_COMPLETE");

    public static readonly OtaUpdateStatus CreateFailed = new("CREATE_FAILED");

    public TResult Match<TResult>(Func<TResult> onCreatePending,
        Func<TResult> onCreateInProgress,
        Func<TResult> onCreateComplete,
        Func<TResult> onCreateFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatePending => onCreatePending(),
            _ when this == CreateInProgress => onCreateInProgress(),
            _ when this == CreateComplete => onCreateComplete(),
            _ when this == CreateFailed => onCreateFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatePending,
        Action onCreateInProgress,
        Action onCreateComplete,
        Action onCreateFailed,
        Action<string> otherwise)
    {
        if (this == CreatePending) onCreatePending();
        else if (this == CreateInProgress) onCreateInProgress();
        else if (this == CreateComplete) onCreateComplete();
        else if (this == CreateFailed) onCreateFailed();
        else otherwise(Value);
    }
}
