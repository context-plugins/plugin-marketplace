using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Font size used for data labels on charts.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataLabelFontSize>))]
public sealed record DataLabelFontSize : OpenStringEnum<DataLabelFontSize>
{
    private DataLabelFontSize(string value) : base(value)
    {
    }

    public static readonly DataLabelFontSize Auto = new("auto");

    public static readonly DataLabelFontSize Small = new("small");

    public static readonly DataLabelFontSize Medium = new("medium");

    public static readonly DataLabelFontSize Large = new("large");

    public TResult Match<TResult>(Func<TResult> onAuto,
        Func<TResult> onSmall,
        Func<TResult> onMedium,
        Func<TResult> onLarge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Small => onSmall(),
            _ when this == Medium => onMedium(),
            _ when this == Large => onLarge(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto, Action onSmall, Action onMedium, Action onLarge, Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Small) onSmall();
        else if (this == Medium) onMedium();
        else if (this == Large) onLarge();
        else otherwise(Value);
    }
}
