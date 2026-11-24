using System;
using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace Boomi.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class MaxPropertiesAttribute : ValidationAttribute
{
    private int Maximum { get; }

    public MaxPropertiesAttribute(int max)
    {
        if (max < 0)
            throw new ArgumentOutOfRangeException(nameof(max));
        Maximum = max;
    }

    public override bool IsValid(object? value) =>
        value is not IDictionary properties || properties.Count <= Maximum;
}
