using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum CarrierPackaging = new("carrier_packaging");

    public static readonly TypeEnum EligibleContents = new("eligible_contents");

    public TResult Match<TResult>(Func<TResult> onCarrierPackaging,
        Func<TResult> onEligibleContents,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CarrierPackaging => onCarrierPackaging(),
            _ when this == EligibleContents => onEligibleContents(),
            _ => otherwise(Value)
        };

    public void Match(Action onCarrierPackaging, Action onEligibleContents, Action<string> otherwise)
    {
        if (this == CarrierPackaging) onCarrierPackaging();
        else if (this == EligibleContents) onEligibleContents();
        else otherwise(Value);
    }
}
