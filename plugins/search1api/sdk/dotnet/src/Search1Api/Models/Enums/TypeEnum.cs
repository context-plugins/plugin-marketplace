using System;
using System.Text.Json.Serialization;
using Search1Api.Core.Enum;

namespace Search1Api.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Sitemap = new("sitemap");

    public static readonly TypeEnum All = new("all");

    public TResult Match<TResult>(Func<TResult> onSitemap, Func<TResult> onAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sitemap => onSitemap(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onSitemap, Action onAll, Action<string> otherwise)
    {
        if (this == Sitemap) onSitemap();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
