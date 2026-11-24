using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PatternAlphAiRestRadarApi>))]
public sealed record PatternAlphAiRestRadarApi : OpenStringEnum<PatternAlphAiRestRadarApi>
{
    private PatternAlphAiRestRadarApi(string value) : base(value)
    {
    }

    public static readonly PatternAlphAiRestRadarApi OpenMarket = new("open_market");

    public TResult Match<TResult>(Func<TResult> onOpenMarket, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OpenMarket => onOpenMarket(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpenMarket, Action<string> otherwise)
    {
        if (this == OpenMarket) onOpenMarket();
        else otherwise(Value);
    }
}
