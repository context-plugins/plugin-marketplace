using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeBundleSocialAutomationApi>))]
public sealed record TypeBundleSocialAutomationApi : OpenStringEnum<TypeBundleSocialAutomationApi>
{
    private TypeBundleSocialAutomationApi(string value) : base(value)
    {
    }

    public static readonly TypeBundleSocialAutomationApi CommentCreated = new("COMMENT_CREATED");

    public static readonly TypeBundleSocialAutomationApi DmReceived = new("DM_RECEIVED");

    public static readonly TypeBundleSocialAutomationApi QuickReplyClicked = new("QUICK_REPLY_CLICKED");

    public static readonly TypeBundleSocialAutomationApi ButtonClicked = new("BUTTON_CLICKED");

    public static readonly TypeBundleSocialAutomationApi ManualTest = new("MANUAL_TEST");

    public TResult Match<TResult>(Func<TResult> onCommentCreated,
        Func<TResult> onDmReceived,
        Func<TResult> onQuickReplyClicked,
        Func<TResult> onButtonClicked,
        Func<TResult> onManualTest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CommentCreated => onCommentCreated(),
            _ when this == DmReceived => onDmReceived(),
            _ when this == QuickReplyClicked => onQuickReplyClicked(),
            _ when this == ButtonClicked => onButtonClicked(),
            _ when this == ManualTest => onManualTest(),
            _ => otherwise(Value)
        };

    public void Match(Action onCommentCreated,
        Action onDmReceived,
        Action onQuickReplyClicked,
        Action onButtonClicked,
        Action onManualTest,
        Action<string> otherwise)
    {
        if (this == CommentCreated) onCommentCreated();
        else if (this == DmReceived) onDmReceived();
        else if (this == QuickReplyClicked) onQuickReplyClicked();
        else if (this == ButtonClicked) onButtonClicked();
        else if (this == ManualTest) onManualTest();
        else otherwise(Value);
    }
}
