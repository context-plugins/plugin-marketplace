using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RecommendationJidScreenApi>))]
public sealed record RecommendationJidScreenApi : OpenStringEnum<RecommendationJidScreenApi>
{
    private RecommendationJidScreenApi(string value) : base(value)
    {
    }

    public static readonly RecommendationJidScreenApi Engage = new("engage");

    public static readonly RecommendationJidScreenApi VerifyFirst = new("verify_first");

    public static readonly RecommendationJidScreenApi DoNotEngage = new("do_not_engage");

    public TResult Match<TResult>(Func<TResult> onEngage,
        Func<TResult> onVerifyFirst,
        Func<TResult> onDoNotEngage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Engage => onEngage(),
            _ when this == VerifyFirst => onVerifyFirst(),
            _ when this == DoNotEngage => onDoNotEngage(),
            _ => otherwise(Value)
        };

    public void Match(Action onEngage, Action onVerifyFirst, Action onDoNotEngage, Action<string> otherwise)
    {
        if (this == Engage) onEngage();
        else if (this == VerifyFirst) onVerifyFirst();
        else if (this == DoNotEngage) onDoNotEngage();
        else otherwise(Value);
    }
}
