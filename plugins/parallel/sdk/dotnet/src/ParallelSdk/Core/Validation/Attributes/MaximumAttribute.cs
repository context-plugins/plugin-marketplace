using System;
using System.ComponentModel.DataAnnotations;

namespace ParallelSdk.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class MaximumAttribute : ValidationAttribute
{
    private decimal Bound { get; }

    public MaximumAttribute(int bound) => Bound = bound;

    public MaximumAttribute(long bound) => Bound = bound;

    public MaximumAttribute(double bound) => Bound = bound.ToDecimalBound();

    public override bool IsValid(object? value) =>
        value is null || (decimal.TryFrom(value, out var number) && number.MeetsMaximum(Bound));
}
