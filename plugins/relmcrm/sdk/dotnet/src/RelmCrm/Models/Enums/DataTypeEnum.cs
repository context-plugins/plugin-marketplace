using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DataTypeEnum>))]
public sealed record DataTypeEnum : OpenStringEnum<DataTypeEnum>
{
    private DataTypeEnum(string value) : base(value)
    {
    }

    public static readonly DataTypeEnum Text = new("text");

    public static readonly DataTypeEnum Number = new("number");

    public static readonly DataTypeEnum Boolean = new("boolean");

    public static readonly DataTypeEnum Date = new("date");

    public static readonly DataTypeEnum Select = new("select");

    public static readonly DataTypeEnum Multiselect = new("multiselect");

    public static readonly DataTypeEnum Currency = new("currency");

    public static readonly DataTypeEnum Reference = new("reference");

    public static readonly DataTypeEnum Email = new("email");

    public static readonly DataTypeEnum Url = new("url");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onNumber,
        Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<TResult> onSelect,
        Func<TResult> onMultiselect,
        Func<TResult> onCurrency,
        Func<TResult> onReference,
        Func<TResult> onEmail,
        Func<TResult> onUrl,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Number => onNumber(),
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ when this == Select => onSelect(),
            _ when this == Multiselect => onMultiselect(),
            _ when this == Currency => onCurrency(),
            _ when this == Reference => onReference(),
            _ when this == Email => onEmail(),
            _ when this == Url => onUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onText,
        Action onNumber,
        Action onBoolean,
        Action onDate,
        Action onSelect,
        Action onMultiselect,
        Action onCurrency,
        Action onReference,
        Action onEmail,
        Action onUrl,
        Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Number) onNumber();
        else if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else if (this == Select) onSelect();
        else if (this == Multiselect) onMultiselect();
        else if (this == Currency) onCurrency();
        else if (this == Reference) onReference();
        else if (this == Email) onEmail();
        else if (this == Url) onUrl();
        else otherwise(Value);
    }
}
