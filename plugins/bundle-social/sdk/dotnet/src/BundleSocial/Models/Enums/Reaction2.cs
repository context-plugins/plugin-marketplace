using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Reaction2>))]
public sealed record Reaction2 : OpenStringEnum<Reaction2>
{
    private Reaction2(string value) : base(value)
    {
    }

    public static readonly Reaction2 Love = new("love");

    public static readonly Reaction2 Like = new("like");

    public static readonly Reaction2 Dislike = new("dislike");

    public static readonly Reaction2 Haha = new("haha");

    public static readonly Reaction2 Wow = new("wow");

    public static readonly Reaction2 Sad = new("sad");

    public static readonly Reaction2 Angry = new("angry");

    public TResult Match<TResult>(Func<TResult> onLove,
        Func<TResult> onLike,
        Func<TResult> onDislike,
        Func<TResult> onHaha,
        Func<TResult> onWow,
        Func<TResult> onSad,
        Func<TResult> onAngry,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Love => onLove(),
            _ when this == Like => onLike(),
            _ when this == Dislike => onDislike(),
            _ when this == Haha => onHaha(),
            _ when this == Wow => onWow(),
            _ when this == Sad => onSad(),
            _ when this == Angry => onAngry(),
            _ => otherwise(Value)
        };

    public void Match(Action onLove,
        Action onLike,
        Action onDislike,
        Action onHaha,
        Action onWow,
        Action onSad,
        Action onAngry,
        Action<string> otherwise)
    {
        if (this == Love) onLove();
        else if (this == Like) onLike();
        else if (this == Dislike) onDislike();
        else if (this == Haha) onHaha();
        else if (this == Wow) onWow();
        else if (this == Sad) onSad();
        else if (this == Angry) onAngry();
        else otherwise(Value);
    }
}
