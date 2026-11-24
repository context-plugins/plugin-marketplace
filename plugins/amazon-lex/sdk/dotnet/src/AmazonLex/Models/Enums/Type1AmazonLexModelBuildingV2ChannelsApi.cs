using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of the messaging platform.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1AmazonLexModelBuildingV2ChannelsApi>))]
public sealed record Type1AmazonLexModelBuildingV2ChannelsApi : OpenStringEnum<Type1AmazonLexModelBuildingV2ChannelsApi>
{
    private Type1AmazonLexModelBuildingV2ChannelsApi(string value) : base(value)
    {
    }

    public static readonly Type1AmazonLexModelBuildingV2ChannelsApi Facebook = new("Facebook");

    public static readonly Type1AmazonLexModelBuildingV2ChannelsApi Slack = new("Slack");

    public static readonly Type1AmazonLexModelBuildingV2ChannelsApi TwilioSms = new("Twilio-Sms");

    public static readonly Type1AmazonLexModelBuildingV2ChannelsApi Kik = new("Kik");

    public TResult Match<TResult>(Func<TResult> onFacebook,
        Func<TResult> onSlack,
        Func<TResult> onTwilioSms,
        Func<TResult> onKik,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Facebook => onFacebook(),
            _ when this == Slack => onSlack(),
            _ when this == TwilioSms => onTwilioSms(),
            _ when this == Kik => onKik(),
            _ => otherwise(Value)
        };

    public void Match(Action onFacebook, Action onSlack, Action onTwilioSms, Action onKik, Action<string> otherwise)
    {
        if (this == Facebook) onFacebook();
        else if (this == Slack) onSlack();
        else if (this == TwilioSms) onTwilioSms();
        else if (this == Kik) onKik();
        else otherwise(Value);
    }
}
