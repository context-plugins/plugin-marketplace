using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AssigneeStatus>))]
public sealed record AssigneeStatus : OpenStringEnum<AssigneeStatus>
{
    private AssigneeStatus(string value) : base(value)
    {
    }

    public static readonly AssigneeStatus Today = new("today");

    public static readonly AssigneeStatus Upcoming = new("upcoming");

    public static readonly AssigneeStatus Later = new("later");

    public static readonly AssigneeStatus New = new("new");

    public static readonly AssigneeStatus Inbox = new("inbox");

    public TResult Match<TResult>(Func<TResult> onToday,
        Func<TResult> onUpcoming,
        Func<TResult> onLater,
        Func<TResult> onNew,
        Func<TResult> onInbox,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Today => onToday(),
            _ when this == Upcoming => onUpcoming(),
            _ when this == Later => onLater(),
            _ when this == New => onNew(),
            _ when this == Inbox => onInbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onToday,
        Action onUpcoming,
        Action onLater,
        Action onNew,
        Action onInbox,
        Action<string> otherwise)
    {
        if (this == Today) onToday();
        else if (this == Upcoming) onUpcoming();
        else if (this == Later) onLater();
        else if (this == New) onNew();
        else if (this == Inbox) onInbox();
        else otherwise(Value);
    }
}
