using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The distribution shape of the nodes in the multi-zonal cluster.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TargetShape>))]
public sealed record TargetShape : OpenStringEnum<TargetShape>
{
    private TargetShape(string value) : base(value)
    {
    }

    public static readonly TargetShape TargetShapeUnspecified = new("TARGET_SHAPE_UNSPECIFIED");

    public static readonly TargetShape Any = new("ANY");

    public TResult Match<TResult>(Func<TResult> onTargetShapeUnspecified,
        Func<TResult> onAny,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TargetShapeUnspecified => onTargetShapeUnspecified(),
            _ when this == Any => onAny(),
            _ => otherwise(Value)
        };

    public void Match(Action onTargetShapeUnspecified, Action onAny, Action<string> otherwise)
    {
        if (this == TargetShapeUnspecified) onTargetShapeUnspecified();
        else if (this == Any) onAny();
        else otherwise(Value);
    }
}
