using System;
using System.ComponentModel.DataAnnotations;

namespace RocketReach.Core.Validation.Attributes;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field)]
public sealed class FormatAttribute : ValidationAttribute
{
    public FormatAttribute(FormatKind kind) => Kind = kind;

    private FormatKind Kind { get; }

    public override bool IsValid(object? value) =>
        value is not string s || s.HasFormat(Kind);
}
