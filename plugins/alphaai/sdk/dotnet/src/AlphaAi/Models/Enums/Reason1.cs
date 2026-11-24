using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reason1>))]
public sealed record Reason1 : OpenStringEnum<Reason1>
{
    private Reason1(string value) : base(value)
    {
    }

    public static readonly Reason1 SearchUnavailable = new("search_unavailable");

    public TResult Match<TResult>(Func<TResult> onSearchUnavailable, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SearchUnavailable => onSearchUnavailable(),
            _ => otherwise(Value)
        };

    public void Match(Action onSearchUnavailable, Action<string> otherwise)
    {
        if (this == SearchUnavailable) onSearchUnavailable();
        else otherwise(Value);
    }
}
