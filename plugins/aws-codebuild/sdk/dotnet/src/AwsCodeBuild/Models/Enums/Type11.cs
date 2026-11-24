using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of report group.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type11>))]
public sealed record Type11 : OpenStringEnum<Type11>
{
    private Type11(string value) : base(value)
    {
    }

    public static readonly Type11 Test = new("TEST");

    public static readonly Type11 CodeCoverage = new("CODE_COVERAGE");

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
