using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The output format of the Dataproc Metastore service's logs.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogFormat>))]
public sealed record LogFormat : OpenStringEnum<LogFormat>
{
    private LogFormat(string value) : base(value)
    {
    }

    public static readonly LogFormat LogFormatUnspecified = new("LOG_FORMAT_UNSPECIFIED");

    public static readonly LogFormat Legacy = new("LEGACY");

    public static readonly LogFormat Json = new("JSON");

    public TResult Match<TResult>(Func<TResult> onLogFormatUnspecified,
        Func<TResult> onLegacy,
        Func<TResult> onJson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LogFormatUnspecified => onLogFormatUnspecified(),
            _ when this == Legacy => onLegacy(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onLogFormatUnspecified, Action onLegacy, Action onJson, Action<string> otherwise)
    {
        if (this == LogFormatUnspecified) onLogFormatUnspecified();
        else if (this == Legacy) onLegacy();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
