using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Post = new("POST");

    public static readonly Type1 Reel = new("REEL");

    public static readonly Type1 Story = new("STORY");

    public TResult Match<TResult>(Func<TResult> onPost,
        Func<TResult> onReel,
        Func<TResult> onStory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Post => onPost(),
            _ when this == Reel => onReel(),
            _ when this == Story => onStory(),
            _ => otherwise(Value)
        };

    public void Match(Action onPost, Action onReel, Action onStory, Action<string> otherwise)
    {
        if (this == Post) onPost();
        else if (this == Reel) onReel();
        else if (this == Story) onStory();
        else otherwise(Value);
    }
}
