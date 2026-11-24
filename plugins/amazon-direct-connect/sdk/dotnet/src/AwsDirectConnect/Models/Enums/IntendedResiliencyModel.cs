using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The resiliency model that the resiliency group is intended to meet. The valid values are maximum-resiliency, high-resiliency, and basic-resiliency.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntendedResiliencyModel>))]
public sealed record IntendedResiliencyModel : OpenStringEnum<IntendedResiliencyModel>
{
    private IntendedResiliencyModel(string value) : base(value)
    {
    }

    public static readonly IntendedResiliencyModel MaximumResiliency = new("maximum-resiliency");

    public static readonly IntendedResiliencyModel HighResiliency = new("high-resiliency");

    public static readonly IntendedResiliencyModel BasicResiliency = new("basic-resiliency");

    public TResult Match<TResult>(Func<TResult> onMaximumResiliency,
        Func<TResult> onHighResiliency,
        Func<TResult> onBasicResiliency,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MaximumResiliency => onMaximumResiliency(),
            _ when this == HighResiliency => onHighResiliency(),
            _ when this == BasicResiliency => onBasicResiliency(),
            _ => otherwise(Value)
        };

    public void Match(Action onMaximumResiliency,
        Action onHighResiliency,
        Action onBasicResiliency,
        Action<string> otherwise)
    {
        if (this == MaximumResiliency) onMaximumResiliency();
        else if (this == HighResiliency) onHighResiliency();
        else if (this == BasicResiliency) onBasicResiliency();
        else otherwise(Value);
    }
}
