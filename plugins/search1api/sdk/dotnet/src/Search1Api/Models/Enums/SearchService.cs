using System;
using System.Text.Json.Serialization;
using Search1Api.Core.Enum;

namespace Search1Api.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SearchService>))]
public sealed record SearchService : OpenStringEnum<SearchService>
{
    private SearchService(string value) : base(value)
    {
    }

    public static readonly SearchService Google = new("google");

    public static readonly SearchService Bing = new("bing");

    public static readonly SearchService Bingcn = new("bingcn");

    public static readonly SearchService Duckduckgo = new("duckduckgo");

    public static readonly SearchService Yahoo = new("yahoo");

    public static readonly SearchService Yandex = new("yandex");

    public static readonly SearchService Youtube = new("youtube");

    public static readonly SearchService X = new("x");

    public static readonly SearchService Reddit = new("reddit");

    public static readonly SearchService Github = new("github");

    public static readonly SearchService Arxiv = new("arxiv");

    public static readonly SearchService Wechat = new("wechat");

    public static readonly SearchService Bilibili = new("bilibili");

    public static readonly SearchService Imdb = new("imdb");

    public static readonly SearchService Wikipedia = new("wikipedia");

    public static readonly SearchService Baidu = new("baidu");

    public static readonly SearchService _360 = new("360");

    public static readonly SearchService Quark = new("quark");

    public TResult Match<TResult>(Func<TResult> onGoogle,
        Func<TResult> onBing,
        Func<TResult> onBingcn,
        Func<TResult> onDuckduckgo,
        Func<TResult> onYahoo,
        Func<TResult> onYandex,
        Func<TResult> onYoutube,
        Func<TResult> onX,
        Func<TResult> onReddit,
        Func<TResult> onGithub,
        Func<TResult> onArxiv,
        Func<TResult> onWechat,
        Func<TResult> onBilibili,
        Func<TResult> onImdb,
        Func<TResult> onWikipedia,
        Func<TResult> onBaidu,
        Func<TResult> on_360,
        Func<TResult> onQuark,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Google => onGoogle(),
            _ when this == Bing => onBing(),
            _ when this == Bingcn => onBingcn(),
            _ when this == Duckduckgo => onDuckduckgo(),
            _ when this == Yahoo => onYahoo(),
            _ when this == Yandex => onYandex(),
            _ when this == Youtube => onYoutube(),
            _ when this == X => onX(),
            _ when this == Reddit => onReddit(),
            _ when this == Github => onGithub(),
            _ when this == Arxiv => onArxiv(),
            _ when this == Wechat => onWechat(),
            _ when this == Bilibili => onBilibili(),
            _ when this == Imdb => onImdb(),
            _ when this == Wikipedia => onWikipedia(),
            _ when this == Baidu => onBaidu(),
            _ when this == _360 => on_360(),
            _ when this == Quark => onQuark(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogle,
        Action onBing,
        Action onBingcn,
        Action onDuckduckgo,
        Action onYahoo,
        Action onYandex,
        Action onYoutube,
        Action onX,
        Action onReddit,
        Action onGithub,
        Action onArxiv,
        Action onWechat,
        Action onBilibili,
        Action onImdb,
        Action onWikipedia,
        Action onBaidu,
        Action on_360,
        Action onQuark,
        Action<string> otherwise)
    {
        if (this == Google) onGoogle();
        else if (this == Bing) onBing();
        else if (this == Bingcn) onBingcn();
        else if (this == Duckduckgo) onDuckduckgo();
        else if (this == Yahoo) onYahoo();
        else if (this == Yandex) onYandex();
        else if (this == Youtube) onYoutube();
        else if (this == X) onX();
        else if (this == Reddit) onReddit();
        else if (this == Github) onGithub();
        else if (this == Arxiv) onArxiv();
        else if (this == Wechat) onWechat();
        else if (this == Bilibili) onBilibili();
        else if (this == Imdb) onImdb();
        else if (this == Wikipedia) onWikipedia();
        else if (this == Baidu) onBaidu();
        else if (this == _360) on_360();
        else if (this == Quark) onQuark();
        else otherwise(Value);
    }
}
