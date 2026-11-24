using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Whether the source text was printed or handwritten
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TextType>))]
public sealed record TextType : OpenStringEnum<TextType>
{
    private TextType(string value) : base(value)
    {
    }

    public static readonly TextType Printed = new("Printed");

    public static readonly TextType Handwritten = new("Handwritten");

    public TResult Match<TResult>(Func<TResult> onPrinted,
        Func<TResult> onHandwritten,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Printed => onPrinted(),
            _ when this == Handwritten => onHandwritten(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrinted, Action onHandwritten, Action<string> otherwise)
    {
        if (this == Printed) onPrinted();
        else if (this == Handwritten) onHandwritten();
        else otherwise(Value);
    }
}
