using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom field. Must be one of the given values.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Text = new("text");

    public static readonly TypeEnum Enum = new("enum");

    public static readonly TypeEnum MultiEnum = new("multi_enum");

    public static readonly TypeEnum Number = new("number");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onEnum,
        Func<TResult> onMultiEnum,
        Func<TResult> onNumber,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Enum => onEnum(),
            _ when this == MultiEnum => onMultiEnum(),
            _ when this == Number => onNumber(),
            _ => otherwise(Value)
        };

    public void Match(Action onText, Action onEnum, Action onMultiEnum, Action onNumber, Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Enum) onEnum();
        else if (this == MultiEnum) onMultiEnum();
        else if (this == Number) onNumber();
        else otherwise(Value);
    }
}
