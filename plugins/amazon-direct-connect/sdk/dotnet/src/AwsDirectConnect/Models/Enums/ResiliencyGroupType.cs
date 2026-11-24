using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The type of the resiliency group. The valid value is Managed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResiliencyGroupType>))]
public sealed record ResiliencyGroupType : OpenStringEnum<ResiliencyGroupType>
{
    private ResiliencyGroupType(string value) : base(value)
    {
    }

    public static readonly ResiliencyGroupType Managed = new("Managed");

    public TResult Match<TResult>(Func<TResult> onManaged, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Managed => onManaged(),
            _ => otherwise(Value)
        };

    public void Match(Action onManaged, Action<string> otherwise)
    {
        if (this == Managed) onManaged();
        else otherwise(Value);
    }
}
