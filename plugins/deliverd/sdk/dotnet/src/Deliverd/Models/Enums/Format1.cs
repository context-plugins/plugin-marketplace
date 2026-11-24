using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// json: the signed envelope. slack: Block Kit for an Incoming Webhook. teams: an Adaptive Card for a Workflows webhook. discord: an embed with a link button for a channel webhook. workspace_studio: fires a Google Workspace Studio starter; made by the Deliverd add-on, with runAs.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Format1>))]
public sealed record Format1 : OpenStringEnum<Format1>
{
    private Format1(string value) : base(value)
    {
    }

    public static readonly Format1 Json = new("json");

    public static readonly Format1 Slack = new("slack");

    public static readonly Format1 Teams = new("teams");

    public static readonly Format1 Discord = new("discord");

    public static readonly Format1 WorkspaceStudio = new("workspace_studio");

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
