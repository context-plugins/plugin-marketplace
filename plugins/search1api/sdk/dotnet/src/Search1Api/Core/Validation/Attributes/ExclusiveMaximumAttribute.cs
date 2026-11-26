using System;
using System.ComponentModel.DataAnnotations;

namespace Search1Api.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class ExclusiveMaximumAttribute : ValidationAttribute
{
    private decimal Bound { get; }

    public ExclusiveMaximumAttribute(int bound) => Bound = bound;

    public ExclusiveMaximumAttribute(long bound) => Bound = bound;

    public ExclusiveMaximumAttribute(double bound) => Bound = bound.ToDecimalBound();

    public override bool IsValid(object? value) =>
        value is null || (decimal.TryFrom(value, out var number) && number.MeetsExclusiveMaximum(Bound));
}
