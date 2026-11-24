using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StoryDuration>))]
public sealed record StoryDuration : OpenStringEnum<StoryDuration>
{
    private StoryDuration(string value) : base(value)
    {
    }

    public static readonly StoryDuration OneDay = new("ONE_DAY");

    public static readonly StoryDuration TwoDays = new("TWO_DAYS");

    public static readonly StoryDuration ThreeDays = new("THREE_DAYS");

    public static readonly StoryDuration OneWeek = new("ONE_WEEK");

    public TResult Match<TResult>(Func<TResult> onOneDay,
        Func<TResult> onTwoDays,
        Func<TResult> onThreeDays,
        Func<TResult> onOneWeek,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OneDay => onOneDay(),
            _ when this == TwoDays => onTwoDays(),
            _ when this == ThreeDays => onThreeDays(),
            _ when this == OneWeek => onOneWeek(),
            _ => otherwise(Value)
        };

    public void Match(Action onOneDay, Action onTwoDays, Action onThreeDays, Action onOneWeek, Action<string> otherwise)
    {
        if (this == OneDay) onOneDay();
        else if (this == TwoDays) onTwoDays();
        else if (this == ThreeDays) onThreeDays();
        else if (this == OneWeek) onOneWeek();
        else otherwise(Value);
    }
}
