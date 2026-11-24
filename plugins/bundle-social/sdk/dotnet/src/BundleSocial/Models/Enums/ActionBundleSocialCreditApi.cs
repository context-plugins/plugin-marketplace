using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionBundleSocialCreditApi>))]
public sealed record ActionBundleSocialCreditApi : OpenStringEnum<ActionBundleSocialCreditApi>
{
    private ActionBundleSocialCreditApi(string value) : base(value)
    {
    }

    public static readonly ActionBundleSocialCreditApi TwitterContentCreate = new("TWITTER_CONTENT_CREATE");

    public static readonly ActionBundleSocialCreditApi TwitterContentCreateWithUrl = new(
        "TWITTER_CONTENT_CREATE_WITH_URL");

    public static readonly ActionBundleSocialCreditApi TwitterContentManage = new("TWITTER_CONTENT_MANAGE");

    public static readonly ActionBundleSocialCreditApi TwitterInteractionDelete = new("TWITTER_INTERACTION_DELETE");

    public static readonly ActionBundleSocialCreditApi TwitterPostRead = new("TWITTER_POST_READ");

    public static readonly ActionBundleSocialCreditApi TwitterUserRead = new("TWITTER_USER_READ");

    public static readonly ActionBundleSocialCreditApi TwitterUserInteractionCreate = new(
        "TWITTER_USER_INTERACTION_CREATE");

    public TResult Match<TResult>(Func<TResult> onTwitterContentCreate,
        Func<TResult> onTwitterContentCreateWithUrl,
        Func<TResult> onTwitterContentManage,
        Func<TResult> onTwitterInteractionDelete,
        Func<TResult> onTwitterPostRead,
        Func<TResult> onTwitterUserRead,
        Func<TResult> onTwitterUserInteractionCreate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TwitterContentCreate => onTwitterContentCreate(),
            _ when this == TwitterContentCreateWithUrl => onTwitterContentCreateWithUrl(),
            _ when this == TwitterContentManage => onTwitterContentManage(),
            _ when this == TwitterInteractionDelete => onTwitterInteractionDelete(),
            _ when this == TwitterPostRead => onTwitterPostRead(),
            _ when this == TwitterUserRead => onTwitterUserRead(),
            _ when this == TwitterUserInteractionCreate => onTwitterUserInteractionCreate(),
            _ => otherwise(Value)
        };

    public void Match(Action onTwitterContentCreate,
        Action onTwitterContentCreateWithUrl,
        Action onTwitterContentManage,
        Action onTwitterInteractionDelete,
        Action onTwitterPostRead,
        Action onTwitterUserRead,
        Action onTwitterUserInteractionCreate,
        Action<string> otherwise)
    {
        if (this == TwitterContentCreate) onTwitterContentCreate();
        else if (this == TwitterContentCreateWithUrl) onTwitterContentCreateWithUrl();
        else if (this == TwitterContentManage) onTwitterContentManage();
        else if (this == TwitterInteractionDelete) onTwitterInteractionDelete();
        else if (this == TwitterPostRead) onTwitterPostRead();
        else if (this == TwitterUserRead) onTwitterUserRead();
        else if (this == TwitterUserInteractionCreate) onTwitterUserInteractionCreate();
        else otherwise(Value);
    }
}
