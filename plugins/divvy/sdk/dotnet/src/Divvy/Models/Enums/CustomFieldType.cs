using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum representing the custom field kind in the Spend API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomFieldType>))]
public sealed record CustomFieldType : OpenStringEnum<CustomFieldType>
{
    private CustomFieldType(string value) : base(value)
    {
    }

    public static readonly CustomFieldType CustomSelector = new("CUSTOM_SELECTOR");

    public static readonly CustomFieldType Note = new("NOTE");

    public TResult Match<TResult>(Func<TResult> onCustomSelector,
        Func<TResult> onNote,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CustomSelector => onCustomSelector(),
            _ when this == Note => onNote(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomSelector, Action onNote, Action<string> otherwise)
    {
        if (this == CustomSelector) onCustomSelector();
        else if (this == Note) onNote();
        else otherwise(Value);
    }
}
