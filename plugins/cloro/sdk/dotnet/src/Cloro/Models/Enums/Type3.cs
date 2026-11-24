using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Discriminator for the underlying citation event: <c>searchResult</c> for inline search citations, <c>groupedWebpage</c> for grouped-webpage cards.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 SearchResult = new("searchResult");

    public static readonly Type3 GroupedWebpage = new("groupedWebpage");

    public TResult Match<TResult>(Func<TResult> onSearchResult,
        Func<TResult> onGroupedWebpage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SearchResult => onSearchResult(),
            _ when this == GroupedWebpage => onGroupedWebpage(),
            _ => otherwise(Value)
        };

    public void Match(Action onSearchResult, Action onGroupedWebpage, Action<string> otherwise)
    {
        if (this == SearchResult) onSearchResult();
        else if (this == GroupedWebpage) onGroupedWebpage();
        else otherwise(Value);
    }
}
