using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity1>))]
public sealed record Severity1 : OpenStringEnum<Severity1>
{
    private Severity1(string value) : base(value)
    {
    }

    public static readonly Severity1 SeverityUnspecified = new("SEVERITY_UNSPECIFIED");

    public static readonly Severity1 Warning = new("WARNING");

    public static readonly Severity1 Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onSeverityUnspecified,
        Func<TResult> onWarning,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SeverityUnspecified => onSeverityUnspecified(),
            _ when this == Warning => onWarning(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onSeverityUnspecified, Action onWarning, Action onError, Action<string> otherwise)
    {
        if (this == SeverityUnspecified) onSeverityUnspecified();
        else if (this == Warning) onWarning();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
