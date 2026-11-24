using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The type of the custom field. Must be one of the given values.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourceSubtypeAsanaCustomFieldSettingsApi>))]
public sealed record ResourceSubtypeAsanaCustomFieldSettingsApi : OpenStringEnum<ResourceSubtypeAsanaCustomFieldSettingsApi>
{
    private ResourceSubtypeAsanaCustomFieldSettingsApi(string value) : base(value)
    {
    }

    public static readonly ResourceSubtypeAsanaCustomFieldSettingsApi Text = new("text");

    public static readonly ResourceSubtypeAsanaCustomFieldSettingsApi Enum = new("enum");

    public static readonly ResourceSubtypeAsanaCustomFieldSettingsApi MultiEnum = new("multi_enum");

    public static readonly ResourceSubtypeAsanaCustomFieldSettingsApi Number = new("number");

    public static readonly ResourceSubtypeAsanaCustomFieldSettingsApi Date = new("date");

    public static readonly ResourceSubtypeAsanaCustomFieldSettingsApi People = new("people");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onEnum,
        Func<TResult> onMultiEnum,
        Func<TResult> onNumber,
        Func<TResult> onDate,
        Func<TResult> onPeople,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Enum => onEnum(),
            _ when this == MultiEnum => onMultiEnum(),
            _ when this == Number => onNumber(),
            _ when this == Date => onDate(),
            _ when this == People => onPeople(),
            _ => otherwise(Value)
        };

    public void Match(Action onText,
        Action onEnum,
        Action onMultiEnum,
        Action onNumber,
        Action onDate,
        Action onPeople,
        Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Enum) onEnum();
        else if (this == MultiEnum) onMultiEnum();
        else if (this == Number) onNumber();
        else if (this == Date) onDate();
        else if (this == People) onPeople();
        else otherwise(Value);
    }
}
