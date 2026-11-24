using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The span semantics to use. Configuration Requirements (if span_semantics is OTEL): - trace_protocol must be OTLP.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpanSemantics>))]
public sealed record SpanSemantics : OpenStringEnum<SpanSemantics>
{
    private SpanSemantics(string value) : base(value)
    {
    }

    public static readonly SpanSemantics SpanSemanticsUnspecified = new("SPAN_SEMANTICS_UNSPECIFIED");

    public static readonly SpanSemantics Legacy = new("LEGACY");

    public static readonly SpanSemantics Otel = new("OTEL");

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
