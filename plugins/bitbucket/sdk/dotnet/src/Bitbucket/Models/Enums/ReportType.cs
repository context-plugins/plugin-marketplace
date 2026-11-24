using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of the report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReportType>))]
public sealed record ReportType : OpenStringEnum<ReportType>
{
    private ReportType(string value) : base(value)
    {
    }

    public static readonly ReportType Security = new("SECURITY");

    public static readonly ReportType Coverage = new("COVERAGE");

    public static readonly ReportType Test = new("TEST");

    public static readonly ReportType Bug = new("BUG");

    public TResult Match<TResult>(Func<TResult> onSecurity,
        Func<TResult> onCoverage,
        Func<TResult> onTest,
        Func<TResult> onBug,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Security => onSecurity(),
            _ when this == Coverage => onCoverage(),
            _ when this == Test => onTest(),
            _ when this == Bug => onBug(),
            _ => otherwise(Value)
        };

    public void Match(Action onSecurity, Action onCoverage, Action onTest, Action onBug, Action<string> otherwise)
    {
        if (this == Security) onSecurity();
        else if (this == Coverage) onCoverage();
        else if (this == Test) onTest();
        else if (this == Bug) onBug();
        else otherwise(Value);
    }
}
