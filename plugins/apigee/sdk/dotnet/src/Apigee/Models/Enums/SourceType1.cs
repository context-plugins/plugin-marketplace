using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SourceType1>))]
public sealed record SourceType1 : OpenStringEnum<SourceType1>
{
    private SourceType1(string value) : base(value)
    {
    }

    public static readonly SourceType1 SourceTypeUnspecified = new("SOURCE_TYPE_UNSPECIFIED");

    public static readonly SourceType1 GcpXlb = new("GCP_XLB");

    public static readonly SourceType1 GcpIlb = new("GCP_ILB");

    public TResult Match<TResult>(Func<TResult> onSourceTypeUnspecified,
        Func<TResult> onGcpXlb,
        Func<TResult> onGcpIlb,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SourceTypeUnspecified => onSourceTypeUnspecified(),
            _ when this == GcpXlb => onGcpXlb(),
            _ when this == GcpIlb => onGcpIlb(),
            _ => otherwise(Value)
        };

    public void Match(Action onSourceTypeUnspecified, Action onGcpXlb, Action onGcpIlb, Action<string> otherwise)
    {
        if (this == SourceTypeUnspecified) onSourceTypeUnspecified();
        else if (this == GcpXlb) onGcpXlb();
        else if (this == GcpIlb) onGcpIlb();
        else otherwise(Value);
    }
}
