using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JurisdictionEnum>))]
public sealed record JurisdictionEnum : OpenStringEnum<JurisdictionEnum>
{
    private JurisdictionEnum(string value) : base(value)
    {
    }

    public static readonly JurisdictionEnum Us = new("us");

    public static readonly JurisdictionEnum Ca = new("ca");

    public TResult Match<TResult>(Func<TResult> onUs, Func<TResult> onCa, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Us => onUs(),
            _ when this == Ca => onCa(),
            _ => otherwise(Value)
        };

    public void Match(Action onUs, Action onCa, Action<string> otherwise)
    {
        if (this == Us) onUs();
        else if (this == Ca) onCa();
        else otherwise(Value);
    }
}
