using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// This is an enum of the status showing whether the metric value pair list has partial or complete data, or if there was an error.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusCode>))]
public sealed record StatusCode : OpenStringEnum<StatusCode>
{
    private StatusCode(string value) : base(value)
    {
    }

    public static readonly StatusCode Complete = new("Complete");

    public static readonly StatusCode InternalError = new("InternalError");

    public static readonly StatusCode PartialData = new("PartialData");

    public TResult Match<TResult>(Func<TResult> onComplete,
        Func<TResult> onInternalError,
        Func<TResult> onPartialData,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Complete => onComplete(),
            _ when this == InternalError => onInternalError(),
            _ when this == PartialData => onPartialData(),
            _ => otherwise(Value)
        };

    public void Match(Action onComplete, Action onInternalError, Action onPartialData, Action<string> otherwise)
    {
        if (this == Complete) onComplete();
        else if (this == InternalError) onInternalError();
        else if (this == PartialData) onPartialData();
        else otherwise(Value);
    }
}
