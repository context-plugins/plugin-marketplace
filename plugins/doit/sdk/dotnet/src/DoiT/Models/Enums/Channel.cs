using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Dispatch channel.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Channel>))]
public sealed record Channel : OpenStringEnum<Channel>
{
    private Channel(string value) : base(value)
    {
    }

    public static readonly Channel Email = new("email");

    public static readonly Channel Slack = new("slack");

    public static readonly Channel Msteams = new("msteams");

    public TResult Match<TResult>(Func<TResult> onEmail,
        Func<TResult> onSlack,
        Func<TResult> onMsteams,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Email => onEmail(),
            _ when this == Slack => onSlack(),
            _ when this == Msteams => onMsteams(),
            _ => otherwise(Value)
        };

    public void Match(Action onEmail, Action onSlack, Action onMsteams, Action<string> otherwise)
    {
        if (this == Email) onEmail();
        else if (this == Slack) onSlack();
        else if (this == Msteams) onMsteams();
        else otherwise(Value);
    }
}
