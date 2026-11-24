using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status5>))]
public sealed record Status5 : OpenStringEnum<Status5>
{
    private Status5(string value) : base(value)
    {
    }

    public static readonly Status5 Active = new("active");

    public static readonly Status5 Complete = new("complete");

    public static readonly Status5 Archived = new("archived");

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
