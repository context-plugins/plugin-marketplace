using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Actor>))]
public sealed record Actor : OpenStringEnum<Actor>
{
    private Actor(string value) : base(value)
    {
    }

    public static readonly Actor Detail = new("detail");

    public static readonly Actor Search = new("search");

    public TResult Match<TResult>(Func<TResult> onDetail, Func<TResult> onSearch, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Detail => onDetail(),
            _ when this == Search => onSearch(),
            _ => otherwise(Value)
        };

    public void Match(Action onDetail, Action onSearch, Action<string> otherwise)
    {
        if (this == Detail) onDetail();
        else if (this == Search) onSearch();
        else otherwise(Value);
    }
}
