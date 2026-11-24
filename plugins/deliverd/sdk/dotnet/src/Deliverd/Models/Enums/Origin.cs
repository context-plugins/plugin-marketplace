using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Origin>))]
public sealed record Origin : OpenStringEnum<Origin>
{
    private Origin(string value) : base(value)
    {
    }

    public static readonly Origin Manual = new("manual");

    public static readonly Origin Suggested = new("suggested");

    public TResult Match<TResult>(Func<TResult> onManual, Func<TResult> onSuggested, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == Suggested => onSuggested(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual, Action onSuggested, Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == Suggested) onSuggested();
        else otherwise(Value);
    }
}
