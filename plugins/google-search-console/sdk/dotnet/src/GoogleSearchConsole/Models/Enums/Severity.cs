using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Not returned; reserved for future use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity SeverityUnspecified = new("SEVERITY_UNSPECIFIED");

    public static readonly Severity Warning = new("WARNING");

    public static readonly Severity Error = new("ERROR");

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
