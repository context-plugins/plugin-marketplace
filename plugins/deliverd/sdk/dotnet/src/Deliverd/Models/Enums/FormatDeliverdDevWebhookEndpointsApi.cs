using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FormatDeliverdDevWebhookEndpointsApi>))]
public sealed record FormatDeliverdDevWebhookEndpointsApi : OpenStringEnum<FormatDeliverdDevWebhookEndpointsApi>
{
    private FormatDeliverdDevWebhookEndpointsApi(string value) : base(value)
    {
    }

    public static readonly FormatDeliverdDevWebhookEndpointsApi Json = new("json");

    public static readonly FormatDeliverdDevWebhookEndpointsApi Slack = new("slack");

    public static readonly FormatDeliverdDevWebhookEndpointsApi Teams = new("teams");

    public static readonly FormatDeliverdDevWebhookEndpointsApi Discord = new("discord");

    public static readonly FormatDeliverdDevWebhookEndpointsApi WorkspaceStudio = new("workspace_studio");

    public TResult Match<TResult>(Func<TResult> onJson,
        Func<TResult> onSlack,
        Func<TResult> onTeams,
        Func<TResult> onDiscord,
        Func<TResult> onWorkspaceStudio,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ when this == Slack => onSlack(),
            _ when this == Teams => onTeams(),
            _ when this == Discord => onDiscord(),
            _ when this == WorkspaceStudio => onWorkspaceStudio(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson,
        Action onSlack,
        Action onTeams,
        Action onDiscord,
        Action onWorkspaceStudio,
        Action<string> otherwise)
    {
        if (this == Json) onJson();
        else if (this == Slack) onSlack();
        else if (this == Teams) onTeams();
        else if (this == Discord) onDiscord();
        else if (this == WorkspaceStudio) onWorkspaceStudio();
        else otherwise(Value);
    }
}
