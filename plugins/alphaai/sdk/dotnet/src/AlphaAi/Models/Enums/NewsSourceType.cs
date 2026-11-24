using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// Where a row was ingested from, the axis the <c>source_type</c> filter on <c>/api/news/</c> selects on. <c>gdelt</c> is press coverage (every publisher channel: the GDELT stream, RSS feeds, directly parsed publisher pages); <c>sec_form4</c> an insider transaction (<c>category</c> <c>insider</c>); <c>sec_form8k</c> an 8-K current report (carries the <c>filing</c> block, filterable by <c>item</c>); <c>sec_form6k</c> a foreign private issuer's 6-K earnings release. The row's <c>original.source</c> names the outlet or the SEC form in words.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NewsSourceType>))]
public sealed record NewsSourceType : OpenStringEnum<NewsSourceType>
{
    private NewsSourceType(string value) : base(value)
    {
    }

    public static readonly NewsSourceType Gdelt = new("gdelt");

    public static readonly NewsSourceType SecForm4 = new("sec_form4");

    public static readonly NewsSourceType SecForm8K = new("sec_form8k");

    public static readonly NewsSourceType SecForm6K = new("sec_form6k");

    public TResult Match<TResult>(Func<TResult> onGdelt,
        Func<TResult> onSecForm4,
        Func<TResult> onSecForm8K,
        Func<TResult> onSecForm6K,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gdelt => onGdelt(),
            _ when this == SecForm4 => onSecForm4(),
            _ when this == SecForm8K => onSecForm8K(),
            _ when this == SecForm6K => onSecForm6K(),
            _ => otherwise(Value)
        };

    public void Match(Action onGdelt,
        Action onSecForm4,
        Action onSecForm8K,
        Action onSecForm6K,
        Action<string> otherwise)
    {
        if (this == Gdelt) onGdelt();
        else if (this == SecForm4) onSecForm4();
        else if (this == SecForm8K) onSecForm8K();
        else if (this == SecForm6K) onSecForm6K();
        else otherwise(Value);
    }
}
