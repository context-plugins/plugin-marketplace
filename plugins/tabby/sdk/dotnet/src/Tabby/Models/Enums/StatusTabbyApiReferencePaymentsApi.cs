using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Status of the order.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusTabbyApiReferencePaymentsApi>))]
public sealed record StatusTabbyApiReferencePaymentsApi : OpenStringEnum<StatusTabbyApiReferencePaymentsApi>
{
    private StatusTabbyApiReferencePaymentsApi(string value) : base(value)
    {
    }

    public static readonly StatusTabbyApiReferencePaymentsApi New = new("new");

    public static readonly StatusTabbyApiReferencePaymentsApi Processing = new("processing");

    public static readonly StatusTabbyApiReferencePaymentsApi Complete = new("complete");

    public static readonly StatusTabbyApiReferencePaymentsApi Refunded = new("refunded");

    public static readonly StatusTabbyApiReferencePaymentsApi Canceled = new("canceled");

    public static readonly StatusTabbyApiReferencePaymentsApi Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onNew,
        Func<TResult> onProcessing,
        Func<TResult> onComplete,
        Func<TResult> onRefunded,
        Func<TResult> onCanceled,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == New => onNew(),
            _ when this == Processing => onProcessing(),
            _ when this == Complete => onComplete(),
            _ when this == Refunded => onRefunded(),
            _ when this == Canceled => onCanceled(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onNew,
        Action onProcessing,
        Action onComplete,
        Action onRefunded,
        Action onCanceled,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == New) onNew();
        else if (this == Processing) onProcessing();
        else if (this == Complete) onComplete();
        else if (this == Refunded) onRefunded();
        else if (this == Canceled) onCanceled();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
