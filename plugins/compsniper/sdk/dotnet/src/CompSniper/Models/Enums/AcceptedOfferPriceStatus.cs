using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AcceptedOfferPriceStatus>))]
public sealed record AcceptedOfferPriceStatus : OpenStringEnum<AcceptedOfferPriceStatus>
{
    private AcceptedOfferPriceStatus(string value) : base(value)
    {
    }

    public static readonly AcceptedOfferPriceStatus Found = new("found");

    public static readonly AcceptedOfferPriceStatus Pending = new("pending");

    public static readonly AcceptedOfferPriceStatus NotAvailable = new("not_available");

    public static readonly AcceptedOfferPriceStatus Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onFound,
        Func<TResult> onPending,
        Func<TResult> onNotAvailable,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Found => onFound(),
            _ when this == Pending => onPending(),
            _ when this == NotAvailable => onNotAvailable(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onFound,
        Action onPending,
        Action onNotAvailable,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Found) onFound();
        else if (this == Pending) onPending();
        else if (this == NotAvailable) onNotAvailable();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
