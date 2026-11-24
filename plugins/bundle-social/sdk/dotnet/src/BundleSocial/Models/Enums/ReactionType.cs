using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReactionType>))]
public sealed record ReactionType : OpenStringEnum<ReactionType>
{
    private ReactionType(string value) : base(value)
    {
    }

    public static readonly ReactionType Like = new("LIKE");

    public static readonly ReactionType Love = new("LOVE");

    public static readonly ReactionType Wow = new("WOW");

    public static readonly ReactionType Haha = new("HAHA");

    public static readonly ReactionType Sad = new("SAD");

    public static readonly ReactionType Angry = new("ANGRY");

    public TResult Match<TResult>(Func<TResult> onLike,
        Func<TResult> onLove,
        Func<TResult> onWow,
        Func<TResult> onHaha,
        Func<TResult> onSad,
        Func<TResult> onAngry,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Like => onLike(),
            _ when this == Love => onLove(),
            _ when this == Wow => onWow(),
            _ when this == Haha => onHaha(),
            _ when this == Sad => onSad(),
            _ when this == Angry => onAngry(),
            _ => otherwise(Value)
        };

    public void Match(Action onLike,
        Action onLove,
        Action onWow,
        Action onHaha,
        Action onSad,
        Action onAngry,
        Action<string> otherwise)
    {
        if (this == Like) onLike();
        else if (this == Love) onLove();
        else if (this == Wow) onWow();
        else if (this == Haha) onHaha();
        else if (this == Sad) onSad();
        else if (this == Angry) onAngry();
        else otherwise(Value);
    }
}
