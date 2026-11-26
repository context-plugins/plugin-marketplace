using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModeAlphAiRestRadarApi>))]
public sealed record ModeAlphAiRestRadarApi : OpenStringEnum<ModeAlphAiRestRadarApi>
{
    private ModeAlphAiRestRadarApi(string value) : base(value)
    {
    }

    public static readonly ModeAlphAiRestRadarApi HistoricalPreview = new("historical_preview");

    public static readonly ModeAlphAiRestRadarApi Live = new("live");

    public TResult Match<TResult>(Func<TResult> onHistoricalPreview,
        Func<TResult> onLive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HistoricalPreview => onHistoricalPreview(),
            _ when this == Live => onLive(),
            _ => otherwise(Value)
        };

    public void Match(Action onHistoricalPreview, Action onLive, Action<string> otherwise)
    {
        if (this == HistoricalPreview) onHistoricalPreview();
        else if (this == Live) onLive();
        else otherwise(Value);
    }
}
