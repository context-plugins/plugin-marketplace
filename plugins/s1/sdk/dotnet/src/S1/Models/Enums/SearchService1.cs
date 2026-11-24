using System;
using System.Text.Json.Serialization;
using S1.Core.Enum;

namespace S1.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SearchService1>))]
public sealed record SearchService1 : OpenStringEnum<SearchService1>
{
    private SearchService1(string value) : base(value)
    {
    }

    public static readonly SearchService1 Google = new("google");

    public static readonly SearchService1 Bing = new("bing");

    public static readonly SearchService1 Duckduckgo = new("duckduckgo");

    public static readonly SearchService1 Yahoo = new("yahoo");

    public static readonly SearchService1 Hackernews = new("hackernews");

    public static readonly SearchService1 Reuters = new("reuters");

    public TResult Match<TResult>(Func<TResult> onGoogle,
        Func<TResult> onBing,
        Func<TResult> onDuckduckgo,
        Func<TResult> onYahoo,
        Func<TResult> onHackernews,
        Func<TResult> onReuters,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Google => onGoogle(),
            _ when this == Bing => onBing(),
            _ when this == Duckduckgo => onDuckduckgo(),
            _ when this == Yahoo => onYahoo(),
            _ when this == Hackernews => onHackernews(),
            _ when this == Reuters => onReuters(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogle,
        Action onBing,
        Action onDuckduckgo,
        Action onYahoo,
        Action onHackernews,
        Action onReuters,
        Action<string> otherwise)
    {
        if (this == Google) onGoogle();
        else if (this == Bing) onBing();
        else if (this == Duckduckgo) onDuckduckgo();
        else if (this == Yahoo) onYahoo();
        else if (this == Hackernews) onHackernews();
        else if (this == Reuters) onReuters();
        else otherwise(Value);
    }
}
