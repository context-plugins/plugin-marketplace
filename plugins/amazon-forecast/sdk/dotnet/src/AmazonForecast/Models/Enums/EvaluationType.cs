using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The type of evaluation. SUMMARY - The average metrics across all windows. COMPUTED - The metrics for the specified window.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EvaluationType>))]
public sealed record EvaluationType : OpenStringEnum<EvaluationType>
{
    private EvaluationType(string value) : base(value)
    {
    }

    public static readonly EvaluationType Summary = new("SUMMARY");

    public static readonly EvaluationType Computed = new("COMPUTED");

    public TResult Match<TResult>(Func<TResult> onSummary, Func<TResult> onComputed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Summary => onSummary(),
            _ when this == Computed => onComputed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSummary, Action onComputed, Action<string> otherwise)
    {
        if (this == Summary) onSummary();
        else if (this == Computed) onComputed();
        else otherwise(Value);
    }
}
