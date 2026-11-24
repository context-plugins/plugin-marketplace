using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The type of the object.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ObjectType>))]
public sealed record ObjectType : OpenStringEnum<ObjectType>
{
    private ObjectType(string value) : base(value)
    {
    }

    public static readonly ObjectType Alert = new("alert");

    public static readonly ObjectType Allocation = new("allocation");

    public static readonly ObjectType Budget = new("budget");

    public static readonly ObjectType Metric = new("metric");

    public static readonly ObjectType Report = new("report");

    public static readonly ObjectType Annotation = new("annotation");

    public TResult Match<TResult>(Func<TResult> onAlert,
        Func<TResult> onAllocation,
        Func<TResult> onBudget,
        Func<TResult> onMetric,
        Func<TResult> onReport,
        Func<TResult> onAnnotation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Alert => onAlert(),
            _ when this == Allocation => onAllocation(),
            _ when this == Budget => onBudget(),
            _ when this == Metric => onMetric(),
            _ when this == Report => onReport(),
            _ when this == Annotation => onAnnotation(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlert,
        Action onAllocation,
        Action onBudget,
        Action onMetric,
        Action onReport,
        Action onAnnotation,
        Action<string> otherwise)
    {
        if (this == Alert) onAlert();
        else if (this == Allocation) onAllocation();
        else if (this == Budget) onBudget();
        else if (this == Metric) onMetric();
        else if (this == Report) onReport();
        else if (this == Annotation) onAnnotation();
        else otherwise(Value);
    }
}
