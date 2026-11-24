using System;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Enum;

namespace GoogleCloudEventarc.Models.Enums;

/// <summary>
/// Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LogSeverity>))]
public sealed record LogSeverity : OpenStringEnum<LogSeverity>
{
    private LogSeverity(string value) : base(value)
    {
    }

    public static readonly LogSeverity LogSeverityUnspecified = new("LOG_SEVERITY_UNSPECIFIED");

    public static readonly LogSeverity None = new("NONE");

    public static readonly LogSeverity Debug = new("DEBUG");

    public static readonly LogSeverity Info = new("INFO");

    public static readonly LogSeverity Notice = new("NOTICE");

    public static readonly LogSeverity Warning = new("WARNING");

    public static readonly LogSeverity Error = new("ERROR");

    public static readonly LogSeverity Critical = new("CRITICAL");

    public static readonly LogSeverity Alert = new("ALERT");

    public static readonly LogSeverity Emergency = new("EMERGENCY");

    public TResult Match<TResult>(Func<TResult> onLogSeverityUnspecified,
        Func<TResult> onNone,
        Func<TResult> onDebug,
        Func<TResult> onInfo,
        Func<TResult> onNotice,
        Func<TResult> onWarning,
        Func<TResult> onError,
        Func<TResult> onCritical,
        Func<TResult> onAlert,
        Func<TResult> onEmergency,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LogSeverityUnspecified => onLogSeverityUnspecified(),
            _ when this == None => onNone(),
            _ when this == Debug => onDebug(),
            _ when this == Info => onInfo(),
            _ when this == Notice => onNotice(),
            _ when this == Warning => onWarning(),
            _ when this == Error => onError(),
            _ when this == Critical => onCritical(),
            _ when this == Alert => onAlert(),
            _ when this == Emergency => onEmergency(),
            _ => otherwise(Value)
        };

    public void Match(Action onLogSeverityUnspecified,
        Action onNone,
        Action onDebug,
        Action onInfo,
        Action onNotice,
        Action onWarning,
        Action onError,
        Action onCritical,
        Action onAlert,
        Action onEmergency,
        Action<string> otherwise)
    {
        if (this == LogSeverityUnspecified) onLogSeverityUnspecified();
        else if (this == None) onNone();
        else if (this == Debug) onDebug();
        else if (this == Info) onInfo();
        else if (this == Notice) onNotice();
        else if (this == Warning) onWarning();
        else if (this == Error) onError();
        else if (this == Critical) onCritical();
        else if (this == Alert) onAlert();
        else if (this == Emergency) onEmergency();
        else otherwise(Value);
    }
}
