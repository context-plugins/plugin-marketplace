using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Security scheme for the outbound connection to the customer-owned OpenTelemetry Collector. Only meaningful when <c>exporter</c> is <c>OPEN_TELEMETRY_COLLECTOR</c>. Runtime consumers unaware of a value should treat it as <c>OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED</c> (== NONE).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OtelCollectorSecurityScheme1>))]
public sealed record OtelCollectorSecurityScheme1 : OpenStringEnum<OtelCollectorSecurityScheme1>
{
    private OtelCollectorSecurityScheme1(string value) : base(value)
    {
    }

    public static readonly OtelCollectorSecurityScheme1 OtelCollectorSecuritySchemeUnspecified = new(
        "OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED");

    public static readonly OtelCollectorSecurityScheme1 None = new("NONE");

    public static readonly OtelCollectorSecurityScheme1 Mtls = new("MTLS");

    public TResult Match<TResult>(Func<TResult> onOtelCollectorSecuritySchemeUnspecified,
        Func<TResult> onNone,
        Func<TResult> onMtls,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OtelCollectorSecuritySchemeUnspecified => onOtelCollectorSecuritySchemeUnspecified(),
            _ when this == None => onNone(),
            _ when this == Mtls => onMtls(),
            _ => otherwise(Value)
        };

    public void Match(Action onOtelCollectorSecuritySchemeUnspecified,
        Action onNone,
        Action onMtls,
        Action<string> otherwise)
    {
        if (this == OtelCollectorSecuritySchemeUnspecified) onOtelCollectorSecuritySchemeUnspecified();
        else if (this == None) onNone();
        else if (this == Mtls) onMtls();
        else otherwise(Value);
    }
}
