using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Not used by Apigee.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum TypeUnspecified = new("TYPE_UNSPECIFIED");

    public static readonly TypeEnum TypeTrial = new("TYPE_TRIAL");

    public static readonly TypeEnum TypePaid = new("TYPE_PAID");

    public static readonly TypeEnum TypeInternal = new("TYPE_INTERNAL");

    public TResult Match<TResult>(Func<TResult> onTypeUnspecified,
        Func<TResult> onTypeTrial,
        Func<TResult> onTypePaid,
        Func<TResult> onTypeInternal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TypeUnspecified => onTypeUnspecified(),
            _ when this == TypeTrial => onTypeTrial(),
            _ when this == TypePaid => onTypePaid(),
            _ when this == TypeInternal => onTypeInternal(),
            _ => otherwise(Value)
        };

    public void Match(Action onTypeUnspecified,
        Action onTypeTrial,
        Action onTypePaid,
        Action onTypeInternal,
        Action<string> otherwise)
    {
        if (this == TypeUnspecified) onTypeUnspecified();
        else if (this == TypeTrial) onTypeTrial();
        else if (this == TypePaid) onTypePaid();
        else if (this == TypeInternal) onTypeInternal();
        else otherwise(Value);
    }
}
