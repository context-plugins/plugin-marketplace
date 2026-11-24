using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot and the external messaging platform.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonLexModelBuildingV2ChannelsApi>))]
public sealed record TypeAmazonLexModelBuildingV2ChannelsApi : OpenStringEnum<TypeAmazonLexModelBuildingV2ChannelsApi>
{
    private TypeAmazonLexModelBuildingV2ChannelsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonLexModelBuildingV2ChannelsApi Facebook = new("Facebook");

    public static readonly TypeAmazonLexModelBuildingV2ChannelsApi Slack = new("Slack");

    public static readonly TypeAmazonLexModelBuildingV2ChannelsApi TwilioSms = new("Twilio-Sms");

    public static readonly TypeAmazonLexModelBuildingV2ChannelsApi Kik = new("Kik");

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
