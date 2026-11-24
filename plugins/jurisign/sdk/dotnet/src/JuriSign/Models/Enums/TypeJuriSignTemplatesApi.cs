using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeJuriSignTemplatesApi>))]
public sealed record TypeJuriSignTemplatesApi : OpenStringEnum<TypeJuriSignTemplatesApi>
{
    private TypeJuriSignTemplatesApi(string value) : base(value)
    {
    }

    public static readonly TypeJuriSignTemplatesApi Signature = new("signature");

    public static readonly TypeJuriSignTemplatesApi Text = new("text");

    public static readonly TypeJuriSignTemplatesApi Date = new("date");

    public static readonly TypeJuriSignTemplatesApi Checkbox = new("checkbox");

    public TResult Match<TResult>(Func<TResult> onSignature,
        Func<TResult> onText,
        Func<TResult> onDate,
        Func<TResult> onCheckbox,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Signature => onSignature(),
            _ when this == Text => onText(),
            _ when this == Date => onDate(),
            _ when this == Checkbox => onCheckbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onSignature, Action onText, Action onDate, Action onCheckbox, Action<string> otherwise)
    {
        if (this == Signature) onSignature();
        else if (this == Text) onText();
        else if (this == Date) onDate();
        else if (this == Checkbox) onCheckbox();
        else otherwise(Value);
    }
}
