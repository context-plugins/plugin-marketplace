using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortAlphAiRestRadarApi>))]
public sealed record SortAlphAiRestRadarApi : OpenStringEnum<SortAlphAiRestRadarApi>
{
    private SortAlphAiRestRadarApi(string value) : base(value)
    {
    }

    public static readonly SortAlphAiRestRadarApi Score = new("score");

    public static readonly SortAlphAiRestRadarApi Stories = new("stories");

    public static readonly SortAlphAiRestRadarApi ModelStories = new("model_stories");

    public static readonly SortAlphAiRestRadarApi Sentiment = new("sentiment");

    public static readonly SortAlphAiRestRadarApi SentimentChange = new("sentiment_change");

    public TResult Match<TResult>(Func<TResult> onScore,
        Func<TResult> onStories,
        Func<TResult> onModelStories,
        Func<TResult> onSentiment,
        Func<TResult> onSentimentChange,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Score => onScore(),
            _ when this == Stories => onStories(),
            _ when this == ModelStories => onModelStories(),
            _ when this == Sentiment => onSentiment(),
            _ when this == SentimentChange => onSentimentChange(),
            _ => otherwise(Value)
        };

    public void Match(Action onScore,
        Action onStories,
        Action onModelStories,
        Action onSentiment,
        Action onSentimentChange,
        Action<string> otherwise)
    {
        if (this == Score) onScore();
        else if (this == Stories) onStories();
        else if (this == ModelStories) onModelStories();
        else if (this == Sentiment) onSentiment();
        else if (this == SentimentChange) onSentimentChange();
        else otherwise(Value);
    }
}
