using System;
using System.ComponentModel.DataAnnotations;

namespace CodeQr.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class MultipleOfAttribute : ValidationAttribute
{
    private decimal Factor { get; }

    public MultipleOfAttribute(int factor)
    {
        if (factor <= 0)
            throw new ArgumentOutOfRangeException(nameof(factor));
        Factor = factor;
    }

    public MultipleOfAttribute(long factor)
    {
        if (factor <= 0)
            throw new ArgumentOutOfRangeException(nameof(factor));
        Factor = factor;
    }

    public MultipleOfAttribute(double factor)
    {
        if (factor <= 0d)
            throw new ArgumentOutOfRangeException(nameof(factor));
        Factor = factor.ToDecimalBound();
    }

    public override bool IsValid(object? value) =>
        value is null || (decimal.TryFrom(value, out var number) && number.IsMultipleOf(Factor));
}
