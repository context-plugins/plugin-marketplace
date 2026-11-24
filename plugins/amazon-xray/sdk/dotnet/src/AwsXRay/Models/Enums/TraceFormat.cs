using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// Format of the requested traces.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TraceFormat>))]
public sealed record TraceFormat : OpenStringEnum<TraceFormat>
{
    private TraceFormat(string value) : base(value)
    {
    }

    public static readonly TraceFormat Xray = new("XRAY");

    public static readonly TraceFormat Otel = new("OTEL");

    public TResult Match<TResult>(Func<TResult> onXray, Func<TResult> onOtel, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Xray => onXray(),
            _ when this == Otel => onOtel(),
            _ => otherwise(Value)
        };

    public void Match(Action onXray, Action onOtel, Action<string> otherwise)
    {
        if (this == Xray) onXray();
        else if (this == Otel) onOtel();
        else otherwise(Value);
    }
}
