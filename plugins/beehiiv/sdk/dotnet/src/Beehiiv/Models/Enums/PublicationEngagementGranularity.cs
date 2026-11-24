using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicationEngagementGranularity>))]
public sealed record PublicationEngagementGranularity : OpenStringEnum<PublicationEngagementGranularity>
{
    private PublicationEngagementGranularity(string value) : base(value)
    {
    }

    public static readonly PublicationEngagementGranularity Day = new("day");

    public static readonly PublicationEngagementGranularity Week = new("week");

    public static readonly PublicationEngagementGranularity Month = new("month");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onMonth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onWeek, Action onMonth, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
