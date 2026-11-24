using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

/// <summary>
/// search or detail for chained jobs, null otherwise.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChainStage>))]
public sealed record ChainStage : OpenStringEnum<ChainStage>
{
    private ChainStage(string value) : base(value)
    {
    }

    public static readonly ChainStage Search = new("search");

    public static readonly ChainStage Detail = new("detail");

    public TResult Match<TResult>(Func<TResult> onSearch, Func<TResult> onDetail, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Search => onSearch(),
            _ when this == Detail => onDetail(),
            _ => otherwise(Value)
        };

    public void Match(Action onSearch, Action onDetail, Action<string> otherwise)
    {
        if (this == Search) onSearch();
        else if (this == Detail) onDetail();
        else otherwise(Value);
    }
}
