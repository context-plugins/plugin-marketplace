using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Severity level of the alert
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AlertSeverity>))]
public sealed record AlertSeverity : OpenStringEnum<AlertSeverity>
{
    private AlertSeverity(string value) : base(value)
    {
    }

    public static readonly AlertSeverity Info = new("Info");

    public static readonly AlertSeverity Warn = new("Warn");

    public static readonly AlertSeverity Error = new("Error");

    public static readonly AlertSeverity Fatal = new("Fatal");

    public TResult Match<TResult>(Func<TResult> onInfo,
        Func<TResult> onWarn,
        Func<TResult> onError,
        Func<TResult> onFatal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Info => onInfo(),
            _ when this == Warn => onWarn(),
            _ when this == Error => onError(),
            _ when this == Fatal => onFatal(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfo, Action onWarn, Action onError, Action onFatal, Action<string> otherwise)
    {
        if (this == Info) onInfo();
        else if (this == Warn) onWarn();
        else if (this == Error) onError();
        else if (this == Fatal) onFatal();
        else otherwise(Value);
    }
}
