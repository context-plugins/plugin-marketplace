using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SupportedGatewayCapacity>))]
public sealed record SupportedGatewayCapacity : OpenStringEnum<SupportedGatewayCapacity>
{
    private SupportedGatewayCapacity(string value) : base(value)
    {
    }

    public static readonly SupportedGatewayCapacity Small = new("Small");

    public static readonly SupportedGatewayCapacity Medium = new("Medium");

    public static readonly SupportedGatewayCapacity Large = new("Large");

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
