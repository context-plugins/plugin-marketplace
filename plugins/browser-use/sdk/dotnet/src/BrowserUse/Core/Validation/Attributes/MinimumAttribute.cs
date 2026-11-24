using System;
using System.ComponentModel.DataAnnotations;

namespace BrowserUse.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class MinimumAttribute : ValidationAttribute
{
    private decimal Bound { get; }

    public MinimumAttribute(int bound) => Bound = bound;

    public MinimumAttribute(long bound) => Bound = bound;

    public MinimumAttribute(double bound) => Bound = bound.ToDecimalBound();

    public override bool IsValid(object? value) =>
        value is null || (decimal.TryFrom(value, out var number) && number.MeetsMinimum(Bound));
}
