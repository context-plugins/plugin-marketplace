using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreationState>))]
public sealed record CreationState : OpenStringEnum<CreationState>
{
    private CreationState(string value) : base(value)
    {
    }

    public static readonly CreationState Active = new("active");

    public static readonly CreationState Draft = new("draft");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDraft, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Draft => onDraft(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDraft, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Draft) onDraft();
        else otherwise(Value);
    }
}
