using System;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Enum;

namespace AmazonVpc.Models.Enums;

/// <summary>
/// The current state of the VPC
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateAmazonVpcVpCsApi>))]
public sealed record StateAmazonVpcVpCsApi : OpenStringEnum<StateAmazonVpcVpCsApi>
{
    private StateAmazonVpcVpCsApi(string value) : base(value)
    {
    }

    public static readonly StateAmazonVpcVpCsApi Pending = new("pending");

    public static readonly StateAmazonVpcVpCsApi Available = new("available");

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
