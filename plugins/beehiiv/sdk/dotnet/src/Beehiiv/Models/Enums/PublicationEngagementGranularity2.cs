using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The granularity at which the engagement metrics are reported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PublicationEngagementGranularity2>))]
public sealed record PublicationEngagementGranularity2 : OpenStringEnum<PublicationEngagementGranularity2>
{
    private PublicationEngagementGranularity2(string value) : base(value)
    {
    }

    public static readonly PublicationEngagementGranularity2 Day = new("day");

    public static readonly PublicationEngagementGranularity2 Week = new("week");

    public static readonly PublicationEngagementGranularity2 Month = new("month");

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
