using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The test report value to accumulate. This must be one of the following values: Test reports: DURATION Accumulate the test run times for the specified reports. PASS_RATE Accumulate the percentage of tests that passed for the specified test reports. TOTAL Accumulate the total number of tests for the specified test reports. Code coverage reports: BRANCH_COVERAGE Accumulate the branch coverage percentages for the specified test reports. BRANCHES_COVERED Accumulate the branches covered values for the specified test reports. BRANCHES_MISSED Accumulate the branches missed values for the specified tes
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TrendField>))]
public sealed record TrendField : OpenStringEnum<TrendField>
{
    private TrendField(string value) : base(value)
    {
    }

    public static readonly TrendField PassRate = new("PASS_RATE");

    public static readonly TrendField Duration = new("DURATION");

    public static readonly TrendField Total = new("TOTAL");

    public static readonly TrendField LineCoverage = new("LINE_COVERAGE");

    public static readonly TrendField LinesCovered = new("LINES_COVERED");

    public static readonly TrendField LinesMissed = new("LINES_MISSED");

    public static readonly TrendField BranchCoverage = new("BRANCH_COVERAGE");

    public static readonly TrendField BranchesCovered = new("BRANCHES_COVERED");

    public static readonly TrendField BranchesMissed = new("BRANCHES_MISSED");

    public TResult Match<TResult>(Func<TResult> onPassRate,
        Func<TResult> onDuration,
        Func<TResult> onTotal,
        Func<TResult> onLineCoverage,
        Func<TResult> onLinesCovered,
        Func<TResult> onLinesMissed,
        Func<TResult> onBranchCoverage,
        Func<TResult> onBranchesCovered,
        Func<TResult> onBranchesMissed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PassRate => onPassRate(),
            _ when this == Duration => onDuration(),
            _ when this == Total => onTotal(),
            _ when this == LineCoverage => onLineCoverage(),
            _ when this == LinesCovered => onLinesCovered(),
            _ when this == LinesMissed => onLinesMissed(),
            _ when this == BranchCoverage => onBranchCoverage(),
            _ when this == BranchesCovered => onBranchesCovered(),
            _ when this == BranchesMissed => onBranchesMissed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPassRate,
        Action onDuration,
        Action onTotal,
        Action onLineCoverage,
        Action onLinesCovered,
        Action onLinesMissed,
        Action onBranchCoverage,
        Action onBranchesCovered,
        Action onBranchesMissed,
        Action<string> otherwise)
    {
        if (this == PassRate) onPassRate();
        else if (this == Duration) onDuration();
        else if (this == Total) onTotal();
        else if (this == LineCoverage) onLineCoverage();
        else if (this == LinesCovered) onLinesCovered();
        else if (this == LinesMissed) onLinesMissed();
        else if (this == BranchCoverage) onBranchCoverage();
        else if (this == BranchesCovered) onBranchesCovered();
        else if (this == BranchesMissed) onBranchesMissed();
        else otherwise(Value);
    }
}
