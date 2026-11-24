using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// The current state of the subnet
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateAmazonVpcSubnetsApi>))]
public sealed record StateAmazonVpcSubnetsApi : OpenStringEnum<StateAmazonVpcSubnetsApi>
{
    private StateAmazonVpcSubnetsApi(string value) : base(value)
    {
    }

    public static readonly StateAmazonVpcSubnetsApi Pending = new("pending");

    public static readonly StateAmazonVpcSubnetsApi Available = new("available");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onAvailable, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else otherwise(Value);
    }
}
