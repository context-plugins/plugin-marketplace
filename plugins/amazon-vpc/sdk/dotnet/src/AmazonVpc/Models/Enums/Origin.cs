using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// Describes how the route was created
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Origin>))]
public sealed record Origin : OpenStringEnum<Origin>
{
    private Origin(string value) : base(value)
    {
    }

    public static readonly Origin CreateRouteTable = new("CreateRouteTable");

    public static readonly Origin CreateRoute = new("CreateRoute");

    public static readonly Origin EnableVgwRoutePropagation = new("EnableVgwRoutePropagation");

    public TResult Match<TResult>(Func<TResult> onCreateRouteTable,
        Func<TResult> onCreateRoute,
        Func<TResult> onEnableVgwRoutePropagation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreateRouteTable => onCreateRouteTable(),
            _ when this == CreateRoute => onCreateRoute(),
            _ when this == EnableVgwRoutePropagation => onEnableVgwRoutePropagation(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreateRouteTable,
        Action onCreateRoute,
        Action onEnableVgwRoutePropagation,
        Action<string> otherwise)
    {
        if (this == CreateRouteTable) onCreateRouteTable();
        else if (this == CreateRoute) onCreateRoute();
        else if (this == EnableVgwRoutePropagation) onEnableVgwRoutePropagation();
        else otherwise(Value);
    }
}
