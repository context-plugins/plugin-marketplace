using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApiHubGatewayType>))]
public sealed record ApiHubGatewayType : OpenStringEnum<ApiHubGatewayType>
{
    private ApiHubGatewayType(string value) : base(value)
    {
    }

    public static readonly ApiHubGatewayType ApiHubGatewayTypeUnspecified = new("API_HUB_GATEWAY_TYPE_UNSPECIFIED");

    public static readonly ApiHubGatewayType ApigeeX = new("APIGEE_X");

    public static readonly ApiHubGatewayType ApigeeHybrid = new("APIGEE_HYBRID");

    public static readonly ApiHubGatewayType ApigeeEdge = new("APIGEE_EDGE");

    public static readonly ApiHubGatewayType ApigeeOpdk = new("APIGEE_OPDK");

    public TResult Match<TResult>(Func<TResult> onApiHubGatewayTypeUnspecified,
        Func<TResult> onApigeeX,
        Func<TResult> onApigeeHybrid,
        Func<TResult> onApigeeEdge,
        Func<TResult> onApigeeOpdk,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiHubGatewayTypeUnspecified => onApiHubGatewayTypeUnspecified(),
            _ when this == ApigeeX => onApigeeX(),
            _ when this == ApigeeHybrid => onApigeeHybrid(),
            _ when this == ApigeeEdge => onApigeeEdge(),
            _ when this == ApigeeOpdk => onApigeeOpdk(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiHubGatewayTypeUnspecified,
        Action onApigeeX,
        Action onApigeeHybrid,
        Action onApigeeEdge,
        Action onApigeeOpdk,
        Action<string> otherwise)
    {
        if (this == ApiHubGatewayTypeUnspecified) onApiHubGatewayTypeUnspecified();
        else if (this == ApigeeX) onApigeeX();
        else if (this == ApigeeHybrid) onApigeeHybrid();
        else if (this == ApigeeEdge) onApigeeEdge();
        else if (this == ApigeeOpdk) onApigeeOpdk();
        else otherwise(Value);
    }
}
