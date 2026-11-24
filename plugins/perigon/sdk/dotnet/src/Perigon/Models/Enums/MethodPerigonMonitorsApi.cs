using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Search method used to populate the field. Accepts WEB_SEARCH or ARTICLE_SEARCH.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MethodPerigonMonitorsApi>))]
public sealed record MethodPerigonMonitorsApi : OpenStringEnum<MethodPerigonMonitorsApi>
{
    private MethodPerigonMonitorsApi(string value) : base(value)
    {
    }

    public static readonly MethodPerigonMonitorsApi WebSearch = new("WEB_SEARCH");

    public static readonly MethodPerigonMonitorsApi ArticleSearch = new("ARTICLE_SEARCH");

    public static readonly MethodPerigonMonitorsApi XPost = new("X_POST");

    public TResult Match<TResult>(Func<TResult> onWebSearch,
        Func<TResult> onArticleSearch,
        Func<TResult> onXPost,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WebSearch => onWebSearch(),
            _ when this == ArticleSearch => onArticleSearch(),
            _ when this == XPost => onXPost(),
            _ => otherwise(Value)
        };

    public void Match(Action onWebSearch, Action onArticleSearch, Action onXPost, Action<string> otherwise)
    {
        if (this == WebSearch) onWebSearch();
        else if (this == ArticleSearch) onArticleSearch();
        else if (this == XPost) onXPost();
        else otherwise(Value);
    }
}
