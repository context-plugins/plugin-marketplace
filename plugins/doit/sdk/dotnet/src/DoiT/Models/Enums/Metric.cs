using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Budget metric
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Metric>))]
public sealed record Metric : OpenStringEnum<Metric>
{
    private Metric(string value) : base(value)
    {
    }

    public static readonly Metric Cost = new("cost");

    public static readonly Metric AmortizedCost = new("amortized_cost");

    public TResult Match<TResult>(Func<TResult> onCost,
        Func<TResult> onAmortizedCost,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cost => onCost(),
            _ when this == AmortizedCost => onAmortizedCost(),
            _ => otherwise(Value)
        };

    public void Match(Action onCost, Action onAmortizedCost, Action<string> otherwise)
    {
        if (this == Cost) onCost();
        else if (this == AmortizedCost) onAmortizedCost();
        else otherwise(Value);
    }
}
