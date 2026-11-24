using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The trace protocol to use. Configuration Requirements (if trace_protocol is OTLP): - Allowed Exporters: CLOUD_TRACE or OPEN_TELEMETRY_COLLECTOR. - If Exporter is OPEN_TELEMETRY_COLLECTOR: - endpoint refers to a valid OTLP collector URL. - If Exporter is CLOUD_TRACE: - endpoint refers to a valid project ID.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TraceProtocol>))]
public sealed record TraceProtocol : OpenStringEnum<TraceProtocol>
{
    private TraceProtocol(string value) : base(value)
    {
    }

    public static readonly TraceProtocol TraceProtocolUnspecified = new("TRACE_PROTOCOL_UNSPECIFIED");

    public static readonly TraceProtocol OpenCensus = new("OPEN_CENSUS");

    public static readonly TraceProtocol Otlp = new("OTLP");

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
