using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// The state of the route
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateAmazonVpcRouteTablesApi>))]
public sealed record StateAmazonVpcRouteTablesApi : OpenStringEnum<StateAmazonVpcRouteTablesApi>
{
    private StateAmazonVpcRouteTablesApi(string value) : base(value)
    {
    }

    public static readonly StateAmazonVpcRouteTablesApi Active = new("active");

    public static readonly StateAmazonVpcRouteTablesApi Blackhole = new("blackhole");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onBlackhole, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Blackhole => onBlackhole(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onBlackhole, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Blackhole) onBlackhole();
        else otherwise(Value);
    }
}
