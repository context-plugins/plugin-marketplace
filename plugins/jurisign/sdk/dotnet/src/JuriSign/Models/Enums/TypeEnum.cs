using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

/// <summary>
/// Field type. 'date' is always auto-filled at signing time, never editable by the signer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Signature = new("signature");

    public static readonly TypeEnum Text = new("text");

    public static readonly TypeEnum Date = new("date");

    public static readonly TypeEnum Checkbox = new("checkbox");

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
