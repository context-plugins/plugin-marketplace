using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

/// <summary>
/// Supported ordering options for action items.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionItemOrderBy>))]
public sealed record ActionItemOrderBy : OpenStringEnum<ActionItemOrderBy>
{
    private ActionItemOrderBy(string value) : base(value)
    {
    }

    public static readonly ActionItemOrderBy CreatedAtDesc = new("created_at_desc");

    public static readonly ActionItemOrderBy CreatedAtAsc = new("created_at_asc");

    public static readonly ActionItemOrderBy UpdatedAtDesc = new("updated_at_desc");

    public static readonly ActionItemOrderBy UpdatedAtAsc = new("updated_at_asc");

    public static readonly ActionItemOrderBy DueDate = new("due_date");

    public TResult Match<TResult>(Func<TResult> onCreatedAtDesc,
        Func<TResult> onCreatedAtAsc,
        Func<TResult> onUpdatedAtDesc,
        Func<TResult> onUpdatedAtAsc,
        Func<TResult> onDueDate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreatedAtDesc => onCreatedAtDesc(),
            _ when this == CreatedAtAsc => onCreatedAtAsc(),
            _ when this == UpdatedAtDesc => onUpdatedAtDesc(),
            _ when this == UpdatedAtAsc => onUpdatedAtAsc(),
            _ when this == DueDate => onDueDate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreatedAtDesc,
        Action onCreatedAtAsc,
        Action onUpdatedAtDesc,
        Action onUpdatedAtAsc,
        Action onDueDate,
        Action<string> otherwise)
    {
        if (this == CreatedAtDesc) onCreatedAtDesc();
        else if (this == CreatedAtAsc) onCreatedAtAsc();
        else if (this == UpdatedAtDesc) onUpdatedAtDesc();
        else if (this == UpdatedAtAsc) onUpdatedAtAsc();
        else if (this == DueDate) onDueDate();
        else otherwise(Value);
    }
}
