using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Lifecycle status of the requirement
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusUiPathTestManagerRequirementsApi>))]
public sealed record StatusUiPathTestManagerRequirementsApi : OpenStringEnum<StatusUiPathTestManagerRequirementsApi>
{
    private StatusUiPathTestManagerRequirementsApi(string value) : base(value)
    {
    }

    public static readonly StatusUiPathTestManagerRequirementsApi Active = new("Active");

    public static readonly StatusUiPathTestManagerRequirementsApi Deprecated = new("Deprecated");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onDeprecated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Deprecated => onDeprecated(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDeprecated, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Deprecated) onDeprecated();
        else otherwise(Value);
    }
}
