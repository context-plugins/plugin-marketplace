using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The current state of the schema (PROCESSING, FAILED, SUCCESS, or NOT_APPLICABLE). When the schema is in the ACTIVE state, you can add data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAwsAppSyncOperationsApi>))]
public sealed record StatusAwsAppSyncOperationsApi : OpenStringEnum<StatusAwsAppSyncOperationsApi>
{
    private StatusAwsAppSyncOperationsApi(string value) : base(value)
    {
    }

    public static readonly StatusAwsAppSyncOperationsApi Processing = new("PROCESSING");

    public static readonly StatusAwsAppSyncOperationsApi Active = new("ACTIVE");

    public static readonly StatusAwsAppSyncOperationsApi Deleting = new("DELETING");

    public static readonly StatusAwsAppSyncOperationsApi Failed = new("FAILED");

    public static readonly StatusAwsAppSyncOperationsApi Success = new("SUCCESS");

    public static readonly StatusAwsAppSyncOperationsApi NotApplicable = new("NOT_APPLICABLE");

    public TResult Match<TResult>(Func<TResult> onProcessing,
        Func<TResult> onActive,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<TResult> onSuccess,
        Func<TResult> onNotApplicable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Processing => onProcessing(),
            _ when this == Active => onActive(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ when this == Success => onSuccess(),
            _ when this == NotApplicable => onNotApplicable(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcessing,
        Action onActive,
        Action onDeleting,
        Action onFailed,
        Action onSuccess,
        Action onNotApplicable,
        Action<string> otherwise)
    {
        if (this == Processing) onProcessing();
        else if (this == Active) onActive();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else if (this == Success) onSuccess();
        else if (this == NotApplicable) onNotApplicable();
        else otherwise(Value);
    }
}
