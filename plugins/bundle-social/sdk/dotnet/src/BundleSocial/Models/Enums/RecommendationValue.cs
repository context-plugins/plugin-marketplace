using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RecommendationValue>))]
public sealed record RecommendationValue : OpenStringEnum<RecommendationValue>
{
    private RecommendationValue(string value) : base(value)
    {
    }

    public static readonly RecommendationValue Recommend = new("RECOMMEND");

    public static readonly RecommendationValue NotRecommend = new("NOT_RECOMMEND");

    public static readonly RecommendationValue Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onRecommend,
        Func<TResult> onNotRecommend,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Recommend => onRecommend(),
            _ when this == NotRecommend => onNotRecommend(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecommend, Action onNotRecommend, Action onUnknown, Action<string> otherwise)
    {
        if (this == Recommend) onRecommend();
        else if (this == NotRecommend) onNotRecommend();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
