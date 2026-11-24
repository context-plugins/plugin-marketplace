using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// The comparison operator to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ComparisonOperator>))]
public sealed record ComparisonOperator : OpenStringEnum<ComparisonOperator>
{
    private ComparisonOperator(string value) : base(value)
    {
    }

    public static readonly ComparisonOperator Contains = new("CONTAINS");

    public static readonly ComparisonOperator EqualsMember = new("EQUALS");

    public TResult Match<TResult>(Func<TResult> onContains,
        Func<TResult> onEqualsMember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Contains => onContains(),
            _ when this == EqualsMember => onEqualsMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onContains, Action onEqualsMember, Action<string> otherwise)
    {
        if (this == Contains) onContains();
        else if (this == EqualsMember) onEqualsMember();
        else otherwise(Value);
    }
}
