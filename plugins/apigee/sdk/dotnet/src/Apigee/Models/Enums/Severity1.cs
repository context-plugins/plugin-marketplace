using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Severity of the issue.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity1>))]
public sealed record Severity1 : OpenStringEnum<Severity1>
{
    private Severity1(string value) : base(value)
    {
    }

    public static readonly Severity1 SeverityUnspecified = new("SEVERITY_UNSPECIFIED");

    public static readonly Severity1 SeverityError = new("SEVERITY_ERROR");

    public static readonly Severity1 SeverityWarning = new("SEVERITY_WARNING");

    public static readonly Severity1 SeverityInfo = new("SEVERITY_INFO");

    public static readonly Severity1 SeverityHint = new("SEVERITY_HINT");

    public TResult Match<TResult>(Func<TResult> onSeverityUnspecified,
        Func<TResult> onSeverityError,
        Func<TResult> onSeverityWarning,
        Func<TResult> onSeverityInfo,
        Func<TResult> onSeverityHint,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SeverityUnspecified => onSeverityUnspecified(),
            _ when this == SeverityError => onSeverityError(),
            _ when this == SeverityWarning => onSeverityWarning(),
            _ when this == SeverityInfo => onSeverityInfo(),
            _ when this == SeverityHint => onSeverityHint(),
            _ => otherwise(Value)
        };

    public void Match(Action onSeverityUnspecified,
        Action onSeverityError,
        Action onSeverityWarning,
        Action onSeverityInfo,
        Action onSeverityHint,
        Action<string> otherwise)
    {
        if (this == SeverityUnspecified) onSeverityUnspecified();
        else if (this == SeverityError) onSeverityError();
        else if (this == SeverityWarning) onSeverityWarning();
        else if (this == SeverityInfo) onSeverityInfo();
        else if (this == SeverityHint) onSeverityHint();
        else otherwise(Value);
    }
}
