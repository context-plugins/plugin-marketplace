using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// The status to set the Feature's status to
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status4>))]
public sealed record Status4 : OpenStringEnum<Status4>
{
    private Status4(string value) : base(value)
    {
    }

    public static readonly Status4 Active = new("active");

    public static readonly Status4 Complete = new("complete");

    public static readonly Status4 Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onComplete,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Complete => onComplete(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onComplete, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Complete) onComplete();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
