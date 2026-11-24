using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// Only relevant for custom fields with <c>custom</c> format. This depicts where to place the custom label. This will be null if the <c>format</c> is not <c>custom</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomLabelPosition>))]
public sealed record CustomLabelPosition : OpenStringEnum<CustomLabelPosition>
{
    private CustomLabelPosition(string value) : base(value)
    {
    }

    public static readonly CustomLabelPosition Prefix = new("prefix");

    public static readonly CustomLabelPosition Suffix = new("suffix");

    public TResult Match<TResult>(Func<TResult> onPrefix, Func<TResult> onSuffix, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Prefix => onPrefix(),
            _ when this == Suffix => onSuffix(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrefix, Action onSuffix, Action<string> otherwise)
    {
        if (this == Prefix) onPrefix();
        else if (this == Suffix) onSuffix();
        else otherwise(Value);
    }
}
