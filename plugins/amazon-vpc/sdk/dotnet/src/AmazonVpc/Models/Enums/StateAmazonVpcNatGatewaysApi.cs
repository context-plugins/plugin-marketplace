using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// The state of the NAT gateway
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateAmazonVpcNatGatewaysApi>))]
public sealed record StateAmazonVpcNatGatewaysApi : OpenStringEnum<StateAmazonVpcNatGatewaysApi>
{
    private StateAmazonVpcNatGatewaysApi(string value) : base(value)
    {
    }

    public static readonly StateAmazonVpcNatGatewaysApi Pending = new("pending");

    public static readonly StateAmazonVpcNatGatewaysApi Failed = new("failed");

    public static readonly StateAmazonVpcNatGatewaysApi Available = new("available");

    public static readonly StateAmazonVpcNatGatewaysApi Deleting = new("deleting");

    public static readonly StateAmazonVpcNatGatewaysApi Deleted = new("deleted");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onFailed,
        Func<TResult> onAvailable,
        Func<TResult> onDeleting,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Failed => onFailed(),
            _ when this == Available => onAvailable(),
            _ when this == Deleting => onDeleting(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onFailed,
        Action onAvailable,
        Action onDeleting,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Failed) onFailed();
        else if (this == Available) onAvailable();
        else if (this == Deleting) onDeleting();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
