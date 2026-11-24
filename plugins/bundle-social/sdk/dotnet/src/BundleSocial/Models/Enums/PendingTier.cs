using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PendingTier>))]
public sealed record PendingTier : OpenStringEnum<PendingTier>
{
    private PendingTier(string value) : base(value)
    {
    }

    public static readonly PendingTier Pro = new("PRO");

    public static readonly PendingTier Business = new("BUSINESS");

    public TResult Match<TResult>(Func<TResult> onPro, Func<TResult> onBusiness, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pro => onPro(),
            _ when this == Business => onBusiness(),
            _ => otherwise(Value)
        };

    public void Match(Action onPro, Action onBusiness, Action<string> otherwise)
    {
        if (this == Pro) onPro();
        else if (this == Business) onBusiness();
        else otherwise(Value);
    }
}
