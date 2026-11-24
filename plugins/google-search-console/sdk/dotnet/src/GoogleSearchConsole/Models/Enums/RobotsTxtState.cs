using System;
using System.Text.Json.Serialization;
using GoogleSearchConsole.Core.Enum;

namespace GoogleSearchConsole.Models.Enums;

/// <summary>
/// Whether or not the page is blocked to Google by a robots.txt rule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RobotsTxtState>))]
public sealed record RobotsTxtState : OpenStringEnum<RobotsTxtState>
{
    private RobotsTxtState(string value) : base(value)
    {
    }

    public static readonly RobotsTxtState RobotsTxtStateUnspecified = new("ROBOTS_TXT_STATE_UNSPECIFIED");

    public static readonly RobotsTxtState Allowed = new("ALLOWED");

    public static readonly RobotsTxtState Disallowed = new("DISALLOWED");

    public TResult Match<TResult>(Func<TResult> onRobotsTxtStateUnspecified,
        Func<TResult> onAllowed,
        Func<TResult> onDisallowed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RobotsTxtStateUnspecified => onRobotsTxtStateUnspecified(),
            _ when this == Allowed => onAllowed(),
            _ when this == Disallowed => onDisallowed(),
            _ => otherwise(Value)
        };

    public void Match(Action onRobotsTxtStateUnspecified,
        Action onAllowed,
        Action onDisallowed,
        Action<string> otherwise)
    {
        if (this == RobotsTxtStateUnspecified) onRobotsTxtStateUnspecified();
        else if (this == Allowed) onAllowed();
        else if (this == Disallowed) onDisallowed();
        else otherwise(Value);
    }
}
