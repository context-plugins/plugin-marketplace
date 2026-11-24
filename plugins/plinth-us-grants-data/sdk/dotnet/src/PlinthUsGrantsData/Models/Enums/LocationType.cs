using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LocationType>))]
public sealed record LocationType : OpenStringEnum<LocationType>
{
    private LocationType(string value) : base(value)
    {
    }

    public static readonly LocationType Recipient = new("recipient");

    public static readonly LocationType Funder = new("funder");

    public static readonly LocationType AreaServed = new("area_served");

    public TResult Match<TResult>(Func<TResult> onRecipient,
        Func<TResult> onFunder,
        Func<TResult> onAreaServed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Recipient => onRecipient(),
            _ when this == Funder => onFunder(),
            _ when this == AreaServed => onAreaServed(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecipient, Action onFunder, Action onAreaServed, Action<string> otherwise)
    {
        if (this == Recipient) onRecipient();
        else if (this == Funder) onFunder();
        else if (this == AreaServed) onAreaServed();
        else otherwise(Value);
    }
}
