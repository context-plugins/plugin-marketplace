using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status11>))]
public sealed record Status11 : OpenStringEnum<Status11>
{
    private Status11(string value) : base(value)
    {
    }

    public static readonly Status11 Archived = new("archived");

    public static readonly Status11 Active = new("active");

    public TResult Match<TResult>(Func<TResult> onArchived, Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Archived => onArchived(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onArchived, Action onActive, Action<string> otherwise)
    {
        if (this == Archived) onArchived();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
