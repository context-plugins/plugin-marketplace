using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source PublisherNews = new("publisher_news");

    public static readonly Source SecForm4 = new("sec_form4");

    public static readonly Source SecForm8K = new("sec_form8k");

    public static readonly Source SecForm6K = new("sec_form6k");

    public static readonly Source EarningsReads = new("earnings_reads");

    public static readonly Source EarningsSchedule = new("earnings_schedule");

    public static readonly Source EconomicCalendar = new("economic_calendar");

    public TResult Match<TResult>(Func<TResult> onPublisherNews,
        Func<TResult> onSecForm4,
        Func<TResult> onSecForm8K,
        Func<TResult> onSecForm6K,
        Func<TResult> onEarningsReads,
        Func<TResult> onEarningsSchedule,
        Func<TResult> onEconomicCalendar,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PublisherNews => onPublisherNews(),
            _ when this == SecForm4 => onSecForm4(),
            _ when this == SecForm8K => onSecForm8K(),
            _ when this == SecForm6K => onSecForm6K(),
            _ when this == EarningsReads => onEarningsReads(),
            _ when this == EarningsSchedule => onEarningsSchedule(),
            _ when this == EconomicCalendar => onEconomicCalendar(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublisherNews,
        Action onSecForm4,
        Action onSecForm8K,
        Action onSecForm6K,
        Action onEarningsReads,
        Action onEarningsSchedule,
        Action onEconomicCalendar,
        Action<string> otherwise)
    {
        if (this == PublisherNews) onPublisherNews();
        else if (this == SecForm4) onSecForm4();
        else if (this == SecForm8K) onSecForm8K();
        else if (this == SecForm6K) onSecForm6K();
        else if (this == EarningsReads) onEarningsReads();
        else if (this == EarningsSchedule) onEarningsSchedule();
        else if (this == EconomicCalendar) onEconomicCalendar();
        else otherwise(Value);
    }
}
