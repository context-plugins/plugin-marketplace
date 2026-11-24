using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TopicType>))]
public sealed record TopicType : OpenStringEnum<TopicType>
{
    private TopicType(string value) : base(value)
    {
    }

    public static readonly TopicType Standard = new("STANDARD");

    public static readonly TopicType Event = new("EVENT");

    public static readonly TopicType Offer = new("OFFER");

    public static readonly TopicType Alert = new("ALERT");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onEvent,
        Func<TResult> onOffer,
        Func<TResult> onAlert,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Event => onEvent(),
            _ when this == Offer => onOffer(),
            _ when this == Alert => onAlert(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard, Action onEvent, Action onOffer, Action onAlert, Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Event) onEvent();
        else if (this == Offer) onOffer();
        else if (this == Alert) onAlert();
        else otherwise(Value);
    }
}
