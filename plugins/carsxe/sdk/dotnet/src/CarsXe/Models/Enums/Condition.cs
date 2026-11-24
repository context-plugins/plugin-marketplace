using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Condition>))]
public sealed record Condition : OpenStringEnum<Condition>
{
    private Condition(string value) : base(value)
    {
    }

    public static readonly Condition Excellent = new("excellent");

    public static readonly Condition Clean = new("clean");

    public static readonly Condition Average = new("average");

    public static readonly Condition Rough = new("rough");

    public TResult Match<TResult>(Func<TResult> onExcellent,
        Func<TResult> onClean,
        Func<TResult> onAverage,
        Func<TResult> onRough,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Excellent => onExcellent(),
            _ when this == Clean => onClean(),
            _ when this == Average => onAverage(),
            _ when this == Rough => onRough(),
            _ => otherwise(Value)
        };

    public void Match(Action onExcellent, Action onClean, Action onAverage, Action onRough, Action<string> otherwise)
    {
        if (this == Excellent) onExcellent();
        else if (this == Clean) onClean();
        else if (this == Average) onAverage();
        else if (this == Rough) onRough();
        else otherwise(Value);
    }
}
