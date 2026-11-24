using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

/// <summary>
/// How cautious <c>engage</c> is. Default balanced.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Policy>))]
public sealed record Policy : OpenStringEnum<Policy>
{
    private Policy(string value) : base(value)
    {
    }

    public static readonly Policy Strict = new("strict");

    public static readonly Policy Balanced = new("balanced");

    public static readonly Policy Permissive = new("permissive");

    public TResult Match<TResult>(Func<TResult> onStrict,
        Func<TResult> onBalanced,
        Func<TResult> onPermissive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Strict => onStrict(),
            _ when this == Balanced => onBalanced(),
            _ when this == Permissive => onPermissive(),
            _ => otherwise(Value)
        };

    public void Match(Action onStrict, Action onBalanced, Action onPermissive, Action<string> otherwise)
    {
        if (this == Strict) onStrict();
        else if (this == Balanced) onBalanced();
        else if (this == Permissive) onPermissive();
        else otherwise(Value);
    }
}
