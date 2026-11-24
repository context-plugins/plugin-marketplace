using System;
using System.ComponentModel.DataAnnotations;

namespace Compabase.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class ExclusiveMinimumAttribute : ValidationAttribute
{
    private decimal Bound { get; }

    public ExclusiveMinimumAttribute(int bound) => Bound = bound;

    public ExclusiveMinimumAttribute(long bound) => Bound = bound;

    public ExclusiveMinimumAttribute(double bound) => Bound = bound.ToDecimalBound();

    public override bool IsValid(object? value) =>
        value is null || (decimal.TryFrom(value, out var number) && number.MeetsExclusiveMinimum(Bound));
}
