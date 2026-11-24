using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Include>))]
public sealed record Include : OpenStringEnum<Include>
{
    private Include(string value) : base(value)
    {
    }

    public static readonly Include Draft = new("draft");

    public TResult Match<TResult>(Func<TResult> onDraft, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else otherwise(Value);
    }
}
