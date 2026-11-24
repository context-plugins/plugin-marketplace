using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MatchMode>))]
public sealed record MatchMode : OpenStringEnum<MatchMode>
{
    private MatchMode(string value) : base(value)
    {
    }

    public static readonly MatchMode Any = new("ANY");

    public static readonly MatchMode All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onAny, Func<TResult> onAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Any => onAny(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onAny, Action onAll, Action<string> otherwise)
    {
        if (this == Any) onAny();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
