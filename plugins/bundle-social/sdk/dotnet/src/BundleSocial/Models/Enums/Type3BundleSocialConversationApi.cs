using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type3BundleSocialConversationApi>))]
public sealed record Type3BundleSocialConversationApi : OpenStringEnum<Type3BundleSocialConversationApi>
{
    private Type3BundleSocialConversationApi(string value) : base(value)
    {
    }

    public static readonly Type3BundleSocialConversationApi Image = new("IMAGE");

    public static readonly Type3BundleSocialConversationApi Video = new("VIDEO");

    public static readonly Type3BundleSocialConversationApi Audio = new("AUDIO");

    public static readonly Type3BundleSocialConversationApi File = new("FILE");

    public static readonly Type3BundleSocialConversationApi Post = new("POST");

    public static readonly Type3BundleSocialConversationApi StoryMention = new("STORY_MENTION");

    public static readonly Type3BundleSocialConversationApi Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onImage,
        Func<TResult> onVideo,
        Func<TResult> onAudio,
        Func<TResult> onFile,
        Func<TResult> onPost,
        Func<TResult> onStoryMention,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ when this == Audio => onAudio(),
            _ when this == File => onFile(),
            _ when this == Post => onPost(),
            _ when this == StoryMention => onStoryMention(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onImage,
        Action onVideo,
        Action onAudio,
        Action onFile,
        Action onPost,
        Action onStoryMention,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Image) onImage();
        else if (this == Video) onVideo();
        else if (this == Audio) onAudio();
        else if (this == File) onFile();
        else if (this == Post) onPost();
        else if (this == StoryMention) onStoryMention();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
