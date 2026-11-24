using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The attribute the user is providing feedback about.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AttributeEnum>))]
public sealed record AttributeEnum : OpenStringEnum<AttributeEnum>
{
    private AttributeEnum(string value) : base(value)
    {
    }

    public static readonly AttributeEnum AttributeUnspecified = new("ATTRIBUTE_UNSPECIFIED");

    public static readonly AttributeEnum AttributeEnvironments = new("ATTRIBUTE_ENVIRONMENTS");

    public static readonly AttributeEnum AttributeIpAddressRanges = new("ATTRIBUTE_IP_ADDRESS_RANGES");

    public TResult Match<TResult>(Func<TResult> onAttributeUnspecified,
        Func<TResult> onAttributeEnvironments,
        Func<TResult> onAttributeIpAddressRanges,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AttributeUnspecified => onAttributeUnspecified(),
            _ when this == AttributeEnvironments => onAttributeEnvironments(),
            _ when this == AttributeIpAddressRanges => onAttributeIpAddressRanges(),
            _ => otherwise(Value)
        };

    public void Match(Action onAttributeUnspecified,
        Action onAttributeEnvironments,
        Action onAttributeIpAddressRanges,
        Action<string> otherwise)
    {
        if (this == AttributeUnspecified) onAttributeUnspecified();
        else if (this == AttributeEnvironments) onAttributeEnvironments();
        else if (this == AttributeIpAddressRanges) onAttributeIpAddressRanges();
        else otherwise(Value);
    }
}
