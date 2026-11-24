using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Whether the condition set is currently active or has been archived.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConditionSetStatus1>))]
public sealed record ConditionSetStatus1 : OpenStringEnum<ConditionSetStatus1>
{
    private ConditionSetStatus1(string value) : base(value)
    {
    }

    public static readonly ConditionSetStatus1 Active = new("active");

    public static readonly ConditionSetStatus1 Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
