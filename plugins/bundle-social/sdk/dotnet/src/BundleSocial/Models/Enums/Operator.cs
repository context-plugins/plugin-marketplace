using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator Contains = new("CONTAINS");

    public static readonly Operator EqualsMember = new("EQUALS");

    public static readonly Operator MatchesAny = new("MATCHES_ANY");

    public TResult Match<TResult>(Func<TResult> onContains,
        Func<TResult> onEqualsMember,
        Func<TResult> onMatchesAny,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Contains => onContains(),
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == MatchesAny => onMatchesAny(),
            _ => otherwise(Value)
        };

    public void Match(Action onContains, Action onEqualsMember, Action onMatchesAny, Action<string> otherwise)
    {
        if (this == Contains) onContains();
        else if (this == EqualsMember) onEqualsMember();
        else if (this == MatchesAny) onMatchesAny();
        else otherwise(Value);
    }
}
