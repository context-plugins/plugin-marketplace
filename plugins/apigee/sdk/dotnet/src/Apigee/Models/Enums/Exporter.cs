using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Exporter that is used to view the distributed trace captured using the chosen trace protocol. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Exporter>))]
public sealed record Exporter : OpenStringEnum<Exporter>
{
    private Exporter(string value) : base(value)
    {
    }

    public static readonly Exporter ExporterUnspecified = new("EXPORTER_UNSPECIFIED");

    public static readonly Exporter Jaeger = new("JAEGER");

    public static readonly Exporter CloudTrace = new("CLOUD_TRACE");

    public static readonly Exporter OpenTelemetryCollector = new("OPEN_TELEMETRY_COLLECTOR");

    public static readonly Exporter OpenTelemetryCloudTrace = new("OPEN_TELEMETRY_CLOUD_TRACE");

    public TResult Match<TResult>(Func<TResult> onExporterUnspecified,
        Func<TResult> onJaeger,
        Func<TResult> onCloudTrace,
        Func<TResult> onOpenTelemetryCollector,
        Func<TResult> onOpenTelemetryCloudTrace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ExporterUnspecified => onExporterUnspecified(),
            _ when this == Jaeger => onJaeger(),
            _ when this == CloudTrace => onCloudTrace(),
            _ when this == OpenTelemetryCollector => onOpenTelemetryCollector(),
            _ when this == OpenTelemetryCloudTrace => onOpenTelemetryCloudTrace(),
            _ => otherwise(Value)
        };

    public void Match(Action onExporterUnspecified,
        Action onJaeger,
        Action onCloudTrace,
        Action onOpenTelemetryCollector,
        Action onOpenTelemetryCloudTrace,
        Action<string> otherwise)
    {
        if (this == ExporterUnspecified) onExporterUnspecified();
        else if (this == Jaeger) onJaeger();
        else if (this == CloudTrace) onCloudTrace();
        else if (this == OpenTelemetryCollector) onOpenTelemetryCollector();
        else if (this == OpenTelemetryCloudTrace) onOpenTelemetryCloudTrace();
        else otherwise(Value);
    }
}
