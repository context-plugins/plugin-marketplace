using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Article selection method. ARTICLES selects up to maxArticleCount matching articles; CLUSTERS selects the first article from each of up to maxArticleCount stories.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method Articles = new("ARTICLES");

    public static readonly Method Clusters = new("CLUSTERS");

    public TResult Match<TResult>(Func<TResult> onArticles,
        Func<TResult> onClusters,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Articles => onArticles(),
            _ when this == Clusters => onClusters(),
            _ => otherwise(Value)
        };

    public void Match(Action onArticles, Action onClusters, Action<string> otherwise)
    {
        if (this == Articles) onArticles();
        else if (this == Clusters) onClusters();
        else otherwise(Value);
    }
}
