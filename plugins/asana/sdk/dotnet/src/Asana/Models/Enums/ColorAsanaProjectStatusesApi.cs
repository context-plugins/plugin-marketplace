using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The color associated with the status update.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ColorAsanaProjectStatusesApi>))]
public sealed record ColorAsanaProjectStatusesApi : OpenStringEnum<ColorAsanaProjectStatusesApi>
{
    private ColorAsanaProjectStatusesApi(string value) : base(value)
    {
    }

    public static readonly ColorAsanaProjectStatusesApi Green = new("green");

    public static readonly ColorAsanaProjectStatusesApi Yellow = new("yellow");

    public static readonly ColorAsanaProjectStatusesApi Red = new("red");

    public static readonly ColorAsanaProjectStatusesApi Blue = new("blue");

    public TResult Match<TResult>(Func<TResult> onGreen,
        Func<TResult> onYellow,
        Func<TResult> onRed,
        Func<TResult> onBlue,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Green => onGreen(),
            _ when this == Yellow => onYellow(),
            _ when this == Red => onRed(),
            _ when this == Blue => onBlue(),
            _ => otherwise(Value)
        };

    public void Match(Action onGreen, Action onYellow, Action onRed, Action onBlue, Action<string> otherwise)
    {
        if (this == Green) onGreen();
        else if (this == Yellow) onYellow();
        else if (this == Red) onRed();
        else if (this == Blue) onBlue();
        else otherwise(Value);
    }
}
