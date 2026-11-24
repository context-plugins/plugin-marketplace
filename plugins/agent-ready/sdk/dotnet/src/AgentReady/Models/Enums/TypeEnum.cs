using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Article = new("Article");

    public static readonly TypeEnum TechArticle = new("TechArticle");

    public static readonly TypeEnum WebPage = new("WebPage");

    public TResult Match<TResult>(Func<TResult> onArticle,
        Func<TResult> onTechArticle,
        Func<TResult> onWebPage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Article => onArticle(),
            _ when this == TechArticle => onTechArticle(),
            _ when this == WebPage => onWebPage(),
            _ => otherwise(Value)
        };

    public void Match(Action onArticle, Action onTechArticle, Action onWebPage, Action<string> otherwise)
    {
        if (this == Article) onArticle();
        else if (this == TechArticle) onTechArticle();
        else if (this == WebPage) onWebPage();
        else otherwise(Value);
    }
}
