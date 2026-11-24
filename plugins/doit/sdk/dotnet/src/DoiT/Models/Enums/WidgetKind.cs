using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Determines which property is populated in the widget's <c>result</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<WidgetKind>))]
public sealed record WidgetKind : OpenStringEnum<WidgetKind>
{
    private WidgetKind(string value) : base(value)
    {
    }

    public static readonly WidgetKind MonetaryMetric = new("monetary_metric");

    public TResult Match<TResult>(Func<TResult> onMonetaryMetric, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MonetaryMetric => onMonetaryMetric(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonetaryMetric, Action<string> otherwise)
    {
        if (this == MonetaryMetric) onMonetaryMetric();
        else otherwise(Value);
    }
}
