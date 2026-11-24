using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status61>))]
public sealed record Status61 : OpenStringEnum<Status61>
{
    private Status61(string value) : base(value)
    {
    }

    public static readonly Status61 Draft = new("DRAFT");

    public static readonly Status61 Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onDisabled, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
