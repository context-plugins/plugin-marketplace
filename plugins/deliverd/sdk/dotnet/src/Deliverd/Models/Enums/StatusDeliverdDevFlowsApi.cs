using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevFlowsApi>))]
public sealed record StatusDeliverdDevFlowsApi : OpenStringEnum<StatusDeliverdDevFlowsApi>
{
    private StatusDeliverdDevFlowsApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevFlowsApi Open = new("open");

    public static readonly StatusDeliverdDevFlowsApi Complete = new("complete");

    public static readonly StatusDeliverdDevFlowsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onComplete,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Complete => onComplete(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onComplete, Action onCancelled, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Complete) onComplete();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
