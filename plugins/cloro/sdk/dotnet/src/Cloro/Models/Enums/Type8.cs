using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// The control that ChatGPT shows for the question.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type8>))]
public sealed record Type8 : OpenStringEnum<Type8>
{
    private Type8(string value) : base(value)
    {
    }

    public static readonly Type8 Radio = new("radio");

    public static readonly Type8 Checkbox = new("checkbox");

    public static readonly Type8 Select = new("select");

    public static readonly Type8 Text = new("text");

    public static readonly Type8 Textarea = new("textarea");

    public static readonly Type8 Date = new("date");

    public TResult Match<TResult>(Func<TResult> onRadio,
        Func<TResult> onCheckbox,
        Func<TResult> onSelect,
        Func<TResult> onText,
        Func<TResult> onTextarea,
        Func<TResult> onDate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Radio => onRadio(),
            _ when this == Checkbox => onCheckbox(),
            _ when this == Select => onSelect(),
            _ when this == Text => onText(),
            _ when this == Textarea => onTextarea(),
            _ when this == Date => onDate(),
            _ => otherwise(Value)
        };

    public void Match(Action onRadio,
        Action onCheckbox,
        Action onSelect,
        Action onText,
        Action onTextarea,
        Action onDate,
        Action<string> otherwise)
    {
        if (this == Radio) onRadio();
        else if (this == Checkbox) onCheckbox();
        else if (this == Select) onSelect();
        else if (this == Text) onText();
        else if (this == Textarea) onTextarea();
        else if (this == Date) onDate();
        else otherwise(Value);
    }
}
