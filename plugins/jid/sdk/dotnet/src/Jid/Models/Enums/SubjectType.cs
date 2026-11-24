using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SubjectType>))]
public sealed record SubjectType : OpenStringEnum<SubjectType>
{
    private SubjectType(string value) : base(value)
    {
    }

    public static readonly SubjectType Business = new("business");

    public static readonly SubjectType IndividualOrUnverified = new("individual_or_unverified");

    public static readonly SubjectType Website = new("website");

    public TResult Match<TResult>(Func<TResult> onBusiness,
        Func<TResult> onIndividualOrUnverified,
        Func<TResult> onWebsite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Business => onBusiness(),
            _ when this == IndividualOrUnverified => onIndividualOrUnverified(),
            _ when this == Website => onWebsite(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusiness, Action onIndividualOrUnverified, Action onWebsite, Action<string> otherwise)
    {
        if (this == Business) onBusiness();
        else if (this == IndividualOrUnverified) onIndividualOrUnverified();
        else if (this == Website) onWebsite();
        else otherwise(Value);
    }
}
