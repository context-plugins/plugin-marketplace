using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimestampOrder>))]
public sealed record TimestampOrder : OpenStringEnum<TimestampOrder>
{
    private TimestampOrder(string value) : base(value)
    {
    }

    public static readonly TimestampOrder OrderUnspecified = new("ORDER_UNSPECIFIED");

    public static readonly TimestampOrder Ascending = new("ASCENDING");

    public static readonly TimestampOrder Descending = new("DESCENDING");

    public TResult Match<TResult>(Func<TResult> onOrderUnspecified,
        Func<TResult> onAscending,
        Func<TResult> onDescending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OrderUnspecified => onOrderUnspecified(),
            _ when this == Ascending => onAscending(),
            _ when this == Descending => onDescending(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrderUnspecified, Action onAscending, Action onDescending, Action<string> otherwise)
    {
        if (this == OrderUnspecified) onOrderUnspecified();
        else if (this == Ascending) onAscending();
        else if (this == Descending) onDescending();
        else otherwise(Value);
    }
}
