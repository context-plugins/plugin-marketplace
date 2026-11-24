using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Provider1>))]
public sealed record Provider1 : OpenStringEnum<Provider1>
{
    private Provider1(string value) : base(value)
    {
    }

    public static readonly Provider1 Notion = new("notion");

    public static readonly Provider1 Slack = new("slack");

    public static readonly Provider1 Hubspot = new("hubspot");

    public static readonly Provider1 Discord = new("discord");

    public TResult Match<TResult>(Func<TResult> onNotion,
        Func<TResult> onSlack,
        Func<TResult> onHubspot,
        Func<TResult> onDiscord,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Notion => onNotion(),
            _ when this == Slack => onSlack(),
            _ when this == Hubspot => onHubspot(),
            _ when this == Discord => onDiscord(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotion, Action onSlack, Action onHubspot, Action onDiscord, Action<string> otherwise)
    {
        if (this == Notion) onNotion();
        else if (this == Slack) onSlack();
        else if (this == Hubspot) onHubspot();
        else if (this == Discord) onDiscord();
        else otherwise(Value);
    }
}
