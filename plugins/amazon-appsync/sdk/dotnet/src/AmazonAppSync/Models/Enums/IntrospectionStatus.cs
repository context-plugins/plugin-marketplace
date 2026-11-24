using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The status of the introspection during retrieval. By default, when a new instrospection is being retrieved, the status will be set to PROCESSING. Once the operation has been completed, the status will change to SUCCESS or FAILED depending on how the data was parsed. A FAILED operation will return an error and its details as an introspectionStatusDetail.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntrospectionStatus>))]
public sealed record IntrospectionStatus : OpenStringEnum<IntrospectionStatus>
{
    private IntrospectionStatus(string value) : base(value)
    {
    }

    public static readonly IntrospectionStatus Processing = new("PROCESSING");

    public static readonly IntrospectionStatus Failed = new("FAILED");

    public static readonly IntrospectionStatus Success = new("SUCCESS");

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
