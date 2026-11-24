using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// Identifies the status of an association. PROCESSING: The API association is being created. You cannot modify association requests during processing. SUCCESS: The API association was successful. You can modify associations after success. FAILED: The API association has failed. You can modify associations after failure.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AssociationStatus>))]
public sealed record AssociationStatus : OpenStringEnum<AssociationStatus>
{
    private AssociationStatus(string value) : base(value)
    {
    }

    public static readonly AssociationStatus Processing = new("PROCESSING");

    public static readonly AssociationStatus Failed = new("FAILED");

    public static readonly AssociationStatus Success = new("SUCCESS");

    public TResult Match<TResult>(Func<TResult> onProcessing,
        Func<TResult> onFailed,
        Func<TResult> onSuccess,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Processing => onProcessing(),
            _ when this == Failed => onFailed(),
            _ when this == Success => onSuccess(),
            _ => otherwise(Value)
        };

    public void Match(Action onProcessing, Action onFailed, Action onSuccess, Action<string> otherwise)
    {
        if (this == Processing) onProcessing();
        else if (this == Failed) onFailed();
        else if (this == Success) onSuccess();
        else otherwise(Value);
    }
}
