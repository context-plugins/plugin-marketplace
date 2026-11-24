using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Scope>))]
public sealed record Scope : OpenStringEnum<Scope>
{
    private Scope(string value) : base(value)
    {
    }

    public static readonly Scope Market = new("market");

    public static readonly Scope Watchlist = new("watchlist");

    public TResult Match<TResult>(Func<TResult> onMarket, Func<TResult> onWatchlist, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Market => onMarket(),
            _ when this == Watchlist => onWatchlist(),
            _ => otherwise(Value)
        };

    public void Match(Action onMarket, Action onWatchlist, Action<string> otherwise)
    {
        if (this == Market) onMarket();
        else if (this == Watchlist) onWatchlist();
        else otherwise(Value);
    }
}
