using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EffectJidVerifyApi>))]
public sealed record EffectJidVerifyApi : OpenStringEnum<EffectJidVerifyApi>
{
    private EffectJidVerifyApi(string value) : base(value)
    {
    }

    public static readonly EffectJidVerifyApi Stop = new("stop");

    public static readonly EffectJidVerifyApi Review = new("review");

    public TResult Match<TResult>(Func<TResult> onStop, Func<TResult> onReview, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stop => onStop(),
            _ when this == Review => onReview(),
            _ => otherwise(Value)
        };

    public void Match(Action onStop, Action onReview, Action<string> otherwise)
    {
        if (this == Stop) onStop();
        else if (this == Review) onReview();
        else otherwise(Value);
    }
}
