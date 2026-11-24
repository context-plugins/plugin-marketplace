using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The trace protocol to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TraceProtocol1>))]
public sealed record TraceProtocol1 : OpenStringEnum<TraceProtocol1>
{
    private TraceProtocol1(string value) : base(value)
    {
    }

    public static readonly TraceProtocol1 TraceProtocolUnspecified = new("TRACE_PROTOCOL_UNSPECIFIED");

    public static readonly TraceProtocol1 OpenCensus = new("OPEN_CENSUS");

    public static readonly TraceProtocol1 Otlp = new("OTLP");

    public TResult Match<TResult>(Func<TResult> onTraceProtocolUnspecified,
        Func<TResult> onOpenCensus,
        Func<TResult> onOtlp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TraceProtocolUnspecified => onTraceProtocolUnspecified(),
            _ when this == OpenCensus => onOpenCensus(),
            _ when this == Otlp => onOtlp(),
            _ => otherwise(Value)
        };

    public void Match(Action onTraceProtocolUnspecified, Action onOpenCensus, Action onOtlp, Action<string> otherwise)
    {
        if (this == TraceProtocolUnspecified) onTraceProtocolUnspecified();
        else if (this == OpenCensus) onOpenCensus();
        else if (this == Otlp) onOtlp();
        else otherwise(Value);
    }
}
