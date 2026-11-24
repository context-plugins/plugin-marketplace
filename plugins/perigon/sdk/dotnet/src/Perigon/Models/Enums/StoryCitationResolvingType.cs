using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// How story citations are resolved. Accepts STORY or TOP_ARTICLE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StoryCitationResolvingType>))]
public sealed record StoryCitationResolvingType : OpenStringEnum<StoryCitationResolvingType>
{
    private StoryCitationResolvingType(string value) : base(value)
    {
    }

    public static readonly StoryCitationResolvingType Story = new("STORY");

    public static readonly StoryCitationResolvingType TopArticle = new("TOP_ARTICLE");

    public TResult Match<TResult>(Func<TResult> onStory, Func<TResult> onTopArticle, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Story => onStory(),
            _ when this == TopArticle => onTopArticle(),
            _ => otherwise(Value)
        };

    public void Match(Action onStory, Action onTopArticle, Action<string> otherwise)
    {
        if (this == Story) onStory();
        else if (this == TopArticle) onTopArticle();
        else otherwise(Value);
    }
}
