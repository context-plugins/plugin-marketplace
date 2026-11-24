using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. The security scheme for the OTel Collector endpoint. Defaults to NONE (unauthenticated OTLP/HTTP), preserving today's behavior for existing configurations. Only applicable when <c>exporter</c> == OPEN_TELEMETRY_COLLECTOR.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OtelCollectorSecurityScheme>))]
public sealed record OtelCollectorSecurityScheme : OpenStringEnum<OtelCollectorSecurityScheme>
{
    private OtelCollectorSecurityScheme(string value) : base(value)
    {
    }

    public static readonly OtelCollectorSecurityScheme OtelCollectorSecuritySchemeUnspecified = new(
        "OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED");

    public static readonly OtelCollectorSecurityScheme None = new("NONE");

    public static readonly OtelCollectorSecurityScheme Mtls = new("MTLS");

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
