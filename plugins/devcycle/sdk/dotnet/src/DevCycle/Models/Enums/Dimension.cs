using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Metric dimension
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Dimension>))]
public sealed record Dimension : OpenStringEnum<Dimension>
{
    private Dimension(string value) : base(value)
    {
    }

    public static readonly Dimension CountPerUniqueUser = new("COUNT_PER_UNIQUE_USER");

    public static readonly Dimension CountPerVariableEvaluation = new("COUNT_PER_VARIABLE_EVALUATION");

    public static readonly Dimension SumPerUniqueUser = new("SUM_PER_UNIQUE_USER");

    public static readonly Dimension AveragePerUniqueUser = new("AVERAGE_PER_UNIQUE_USER");

    public static readonly Dimension TotalAverage = new("TOTAL_AVERAGE");

    public static readonly Dimension TotalSum = new("TOTAL_SUM");

    public TResult Match<TResult>(Func<TResult> onCountPerUniqueUser,
        Func<TResult> onCountPerVariableEvaluation,
        Func<TResult> onSumPerUniqueUser,
        Func<TResult> onAveragePerUniqueUser,
        Func<TResult> onTotalAverage,
        Func<TResult> onTotalSum,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CountPerUniqueUser => onCountPerUniqueUser(),
            _ when this == CountPerVariableEvaluation => onCountPerVariableEvaluation(),
            _ when this == SumPerUniqueUser => onSumPerUniqueUser(),
            _ when this == AveragePerUniqueUser => onAveragePerUniqueUser(),
            _ when this == TotalAverage => onTotalAverage(),
            _ when this == TotalSum => onTotalSum(),
            _ => otherwise(Value)
        };

    public void Match(Action onCountPerUniqueUser,
        Action onCountPerVariableEvaluation,
        Action onSumPerUniqueUser,
        Action onAveragePerUniqueUser,
        Action onTotalAverage,
        Action onTotalSum,
        Action<string> otherwise)
    {
        if (this == CountPerUniqueUser) onCountPerUniqueUser();
        else if (this == CountPerVariableEvaluation) onCountPerVariableEvaluation();
        else if (this == SumPerUniqueUser) onSumPerUniqueUser();
        else if (this == AveragePerUniqueUser) onAveragePerUniqueUser();
        else if (this == TotalAverage) onTotalAverage();
        else if (this == TotalSum) onTotalSum();
        else otherwise(Value);
    }
}
