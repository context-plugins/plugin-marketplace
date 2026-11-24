using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The type of associated gateway.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum VirtualPrivateGateway = new("virtualPrivateGateway");

    public static readonly TypeEnum TransitGateway = new("transitGateway");

    public TResult Match<TResult>(Func<TResult> onVirtualPrivateGateway,
        Func<TResult> onTransitGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VirtualPrivateGateway => onVirtualPrivateGateway(),
            _ when this == TransitGateway => onTransitGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onVirtualPrivateGateway, Action onTransitGateway, Action<string> otherwise)
    {
        if (this == VirtualPrivateGateway) onVirtualPrivateGateway();
        else if (this == TransitGateway) onTransitGateway();
        else otherwise(Value);
    }
}
