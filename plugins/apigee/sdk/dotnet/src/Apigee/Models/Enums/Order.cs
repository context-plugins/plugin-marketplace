using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Order>))]
public sealed record Order : OpenStringEnum<Order>
{
    private Order(string value) : base(value)
    {
    }

    public static readonly Order OrderUnspecified = new("ORDER_UNSPECIFIED");

    public static readonly Order Ascending = new("ASCENDING");

    public static readonly Order Descending = new("DESCENDING");

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
