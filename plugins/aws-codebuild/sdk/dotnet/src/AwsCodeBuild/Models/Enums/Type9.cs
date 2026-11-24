using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of the ReportGroup. This can be one of the following values: CODE_COVERAGE The report group contains code coverage reports. TEST The report group contains test reports.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type9>))]
public sealed record Type9 : OpenStringEnum<Type9>
{
    private Type9(string value) : base(value)
    {
    }

    public static readonly Type9 Test = new("TEST");

    public static readonly Type9 CodeCoverage = new("CODE_COVERAGE");

    public TResult Match<TResult>(Func<TResult> onTest,
        Func<TResult> onCodeCoverage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Test => onTest(),
            _ when this == CodeCoverage => onCodeCoverage(),
            _ => otherwise(Value)
        };

    public void Match(Action onTest, Action onCodeCoverage, Action<string> otherwise)
    {
        if (this == Test) onTest();
        else if (this == CodeCoverage) onCodeCoverage();
        else otherwise(Value);
    }
}
