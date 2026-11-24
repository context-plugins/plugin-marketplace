using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// suggested when you proposed moving this into a side task and the person agreed
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Origin6>))]
public sealed record Origin6 : OpenStringEnum<Origin6>
{
    private Origin6(string value) : base(value)
    {
    }

    public static readonly Origin6 Manual = new("manual");

    public static readonly Origin6 Suggested = new("suggested");

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
