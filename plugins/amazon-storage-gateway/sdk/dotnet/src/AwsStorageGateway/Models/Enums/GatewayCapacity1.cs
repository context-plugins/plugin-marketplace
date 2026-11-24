using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// Specifies the size of the gateway's metadata cache. This setting impacts gateway performance and hardware recommendations. For more information, see Performance guidance for gateways with multiple file shares in the Amazon S3 File Gateway User Guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<GatewayCapacity1>))]
public sealed record GatewayCapacity1 : OpenStringEnum<GatewayCapacity1>
{
    private GatewayCapacity1(string value) : base(value)
    {
    }

    public static readonly GatewayCapacity1 Small = new("Small");

    public static readonly GatewayCapacity1 Medium = new("Medium");

    public static readonly GatewayCapacity1 Large = new("Large");

    public TResult Match<TResult>(Func<TResult> onSmall,
        Func<TResult> onMedium,
        Func<TResult> onLarge,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Small => onSmall(),
            _ when this == Medium => onMedium(),
            _ when this == Large => onLarge(),
            _ => otherwise(Value)
        };

    public void Match(Action onSmall, Action onMedium, Action onLarge, Action<string> otherwise)
    {
        if (this == Small) onSmall();
        else if (this == Medium) onMedium();
        else if (this == Large) onLarge();
        else otherwise(Value);
    }
}
