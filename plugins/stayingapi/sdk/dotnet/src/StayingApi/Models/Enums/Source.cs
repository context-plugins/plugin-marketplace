using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

/// <summary>
/// How the comparison was produced. Absent = google-aggregator (one Google Hotels leg). 'direct_fanout' = one real price call per listing id you supplied.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source GoogleAggregator = new("google_aggregator");

    public static readonly Source DirectFanout = new("direct_fanout");

    public TResult Match<TResult>(Func<TResult> onGoogleAggregator,
        Func<TResult> onDirectFanout,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GoogleAggregator => onGoogleAggregator(),
            _ when this == DirectFanout => onDirectFanout(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogleAggregator, Action onDirectFanout, Action<string> otherwise)
    {
        if (this == GoogleAggregator) onGoogleAggregator();
        else if (this == DirectFanout) onDirectFanout();
        else otherwise(Value);
    }
}
