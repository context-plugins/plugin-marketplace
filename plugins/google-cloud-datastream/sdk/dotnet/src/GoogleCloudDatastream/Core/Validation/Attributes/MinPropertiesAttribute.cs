using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace GoogleCloudDatastream.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class MinPropertiesAttribute : ValidationAttribute
{
    private int Minimum { get; }

    public MinPropertiesAttribute(int min)
    {
        if (min < 0)
            throw new ArgumentOutOfRangeException(nameof(min));
        Minimum = min;
    }

    public override bool IsValid(object? value) =>
        value is not IDictionary properties || properties.Count >= Minimum;
}
