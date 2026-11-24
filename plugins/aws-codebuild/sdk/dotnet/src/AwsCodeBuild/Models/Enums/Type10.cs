using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of the report that was run. CODE_COVERAGE A code coverage report. TEST A test report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type10>))]
public sealed record Type10 : OpenStringEnum<Type10>
{
    private Type10(string value) : base(value)
    {
    }

    public static readonly Type10 Test = new("TEST");

    public static readonly Type10 CodeCoverage = new("CODE_COVERAGE");

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
