using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttributeTypeDto>))]
public sealed record AttributeTypeDto : OpenStringEnum<AttributeTypeDto>
{
    private AttributeTypeDto(string value) : base(value)
    {
    }

    public static readonly AttributeTypeDto Text = new("text");

    public static readonly AttributeTypeDto Number = new("number");

    public static readonly AttributeTypeDto Checkbox = new("checkbox");

    public static readonly AttributeTypeDto Datetime = new("datetime");

    public static readonly AttributeTypeDto SingleSelect = new("singleSelect");

    public static readonly AttributeTypeDto MultiSelect = new("multiSelect");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onNumber,
        Func<TResult> onCheckbox,
        Func<TResult> onDatetime,
        Func<TResult> onSingleSelect,
        Func<TResult> onMultiSelect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Number => onNumber(),
            _ when this == Checkbox => onCheckbox(),
            _ when this == Datetime => onDatetime(),
            _ when this == SingleSelect => onSingleSelect(),
            _ when this == MultiSelect => onMultiSelect(),
            _ => otherwise(Value)
        };

    public void Match(Action onText,
        Action onNumber,
        Action onCheckbox,
        Action onDatetime,
        Action onSingleSelect,
        Action onMultiSelect,
        Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Number) onNumber();
        else if (this == Checkbox) onCheckbox();
        else if (this == Datetime) onDatetime();
        else if (this == SingleSelect) onSingleSelect();
        else if (this == MultiSelect) onMultiSelect();
        else otherwise(Value);
    }
}
