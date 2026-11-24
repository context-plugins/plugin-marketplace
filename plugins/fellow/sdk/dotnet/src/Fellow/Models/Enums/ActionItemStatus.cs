using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionItemStatus>))]
public sealed record ActionItemStatus : OpenStringEnum<ActionItemStatus>
{
    private ActionItemStatus(string value) : base(value)
    {
    }

    public static readonly ActionItemStatus Done = new("Done");

    public static readonly ActionItemStatus Archived = new("Archived");

    public static readonly ActionItemStatus Incomplete = new("Incomplete");

    public TResult Match<TResult>(Func<TResult> onDone,
        Func<TResult> onArchived,
        Func<TResult> onIncomplete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Done => onDone(),
            _ when this == Archived => onArchived(),
            _ when this == Incomplete => onIncomplete(),
            _ => otherwise(Value)
        };

    public void Match(Action onDone, Action onArchived, Action onIncomplete, Action<string> otherwise)
    {
        if (this == Done) onDone();
        else if (this == Archived) onArchived();
        else if (this == Incomplete) onIncomplete();
        else otherwise(Value);
    }
}
