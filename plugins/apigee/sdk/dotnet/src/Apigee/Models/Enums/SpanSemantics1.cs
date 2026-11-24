using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The span semantics to use. Configuration Requirements (if <c>span_semantics</c> is <c>OTEL</c>): - <c>trace_protocol</c> must be <c>OTLP</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpanSemantics1>))]
public sealed record SpanSemantics1 : OpenStringEnum<SpanSemantics1>
{
    private SpanSemantics1(string value) : base(value)
    {
    }

    public static readonly SpanSemantics1 SpanSemanticsUnspecified = new("SPAN_SEMANTICS_UNSPECIFIED");

    public static readonly SpanSemantics1 Legacy = new("LEGACY");

    public static readonly SpanSemantics1 Otel = new("OTEL");

    public TResult Match<TResult>(Func<TResult> onSpanSemanticsUnspecified,
        Func<TResult> onLegacy,
        Func<TResult> onOtel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SpanSemanticsUnspecified => onSpanSemanticsUnspecified(),
            _ when this == Legacy => onLegacy(),
            _ when this == Otel => onOtel(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpanSemanticsUnspecified, Action onLegacy, Action onOtel, Action<string> otherwise)
    {
        if (this == SpanSemanticsUnspecified) onSpanSemanticsUnspecified();
        else if (this == Legacy) onLegacy();
        else if (this == Otel) onOtel();
        else otherwise(Value);
    }
}
