using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Operator>))]
public sealed record Operator : OpenStringEnum<Operator>
{
    private Operator(string value) : base(value)
    {
    }

    public static readonly Operator EqualsMember = new("EQUALS");

    public static readonly Operator NotEquals = new("NOT_EQUALS");

    public static readonly Operator Contains = new("CONTAINS");

    public static readonly Operator NotContains = new("NOT_CONTAINS");

    public static readonly Operator IncludingRegex = new("INCLUDING_REGEX");

    public static readonly Operator ExcludingRegex = new("EXCLUDING_REGEX");

    public TResult Match<TResult>(Func<TResult> onEqualsMember,
        Func<TResult> onNotEquals,
        Func<TResult> onContains,
        Func<TResult> onNotContains,
        Func<TResult> onIncludingRegex,
        Func<TResult> onExcludingRegex,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EqualsMember => onEqualsMember(),
            _ when this == NotEquals => onNotEquals(),
            _ when this == Contains => onContains(),
            _ when this == NotContains => onNotContains(),
            _ when this == IncludingRegex => onIncludingRegex(),
            _ when this == ExcludingRegex => onExcludingRegex(),
            _ => otherwise(Value)
        };

    public void Match(Action onEqualsMember,
        Action onNotEquals,
        Action onContains,
        Action onNotContains,
        Action onIncludingRegex,
        Action onExcludingRegex,
        Action<string> otherwise)
    {
        if (this == EqualsMember) onEqualsMember();
        else if (this == NotEquals) onNotEquals();
        else if (this == Contains) onContains();
        else if (this == NotContains) onNotContains();
        else if (this == IncludingRegex) onIncludingRegex();
        else if (this == ExcludingRegex) onExcludingRegex();
        else otherwise(Value);
    }
}
