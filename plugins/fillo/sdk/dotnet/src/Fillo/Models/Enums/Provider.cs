using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Provider>))]
public sealed record Provider : OpenStringEnum<Provider>
{
    private Provider(string value) : base(value)
    {
    }

    public static readonly Provider GoogleSheets = new("google_sheets");

    public static readonly Provider Notion = new("notion");

    public static readonly Provider Slack = new("slack");

    public static readonly Provider Hubspot = new("hubspot");

    public TResult Match<TResult>(Func<TResult> onGoogleSheets,
        Func<TResult> onNotion,
        Func<TResult> onSlack,
        Func<TResult> onHubspot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GoogleSheets => onGoogleSheets(),
            _ when this == Notion => onNotion(),
            _ when this == Slack => onSlack(),
            _ when this == Hubspot => onHubspot(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogleSheets,
        Action onNotion,
        Action onSlack,
        Action onHubspot,
        Action<string> otherwise)
    {
        if (this == GoogleSheets) onGoogleSheets();
        else if (this == Notion) onNotion();
        else if (this == Slack) onSlack();
        else if (this == Hubspot) onHubspot();
        else otherwise(Value);
    }
}
