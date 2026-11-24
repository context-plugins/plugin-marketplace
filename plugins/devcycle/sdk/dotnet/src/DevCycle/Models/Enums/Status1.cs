using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Status of the Feature
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Active = new("active");

    public static readonly Status1 Complete = new("complete");

    public static readonly Status1 Archived = new("archived");

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
