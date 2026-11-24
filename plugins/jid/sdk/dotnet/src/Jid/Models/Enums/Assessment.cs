using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Assessment>))]
public sealed record Assessment : OpenStringEnum<Assessment>
{
    private Assessment(string value) : base(value)
    {
    }

    public static readonly Assessment Business = new("business");

    public static readonly Assessment IndividualOrUnverified = new("individual_or_unverified");

    public TResult Match<TResult>(Func<TResult> onBusiness,
        Func<TResult> onIndividualOrUnverified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ when this == IndividualOrUnverified => onIndividualOrUnverified(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness, Action onIndividualOrUnverified, Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else if (this == IndividualOrUnverified) onIndividualOrUnverified();
        else otherwise(Value);
    }
}
