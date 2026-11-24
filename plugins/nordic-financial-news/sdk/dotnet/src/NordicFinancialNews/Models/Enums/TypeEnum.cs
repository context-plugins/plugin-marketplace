using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Article = new("article");

    public static readonly TypeEnum CompanyWebsite = new("company_website");

    public TResult Match<TResult>(Func<TResult> onArticle,
        Func<TResult> onCompanyWebsite,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Article => onArticle(),
            _ when this == CompanyWebsite => onCompanyWebsite(),
            _ => otherwise(Value)
        };

    public void Match(Action onArticle, Action onCompanyWebsite, Action<string> otherwise)
    {
        if (this == Article) onArticle();
        else if (this == CompanyWebsite) onCompanyWebsite();
        else otherwise(Value);
    }
}
