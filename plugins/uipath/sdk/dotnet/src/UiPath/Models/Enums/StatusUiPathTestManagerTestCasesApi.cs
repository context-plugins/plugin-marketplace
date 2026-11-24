using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Lifecycle status of the test case
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusUiPathTestManagerTestCasesApi>))]
public sealed record StatusUiPathTestManagerTestCasesApi : OpenStringEnum<StatusUiPathTestManagerTestCasesApi>
{
    private StatusUiPathTestManagerTestCasesApi(string value) : base(value)
    {
    }

    public static readonly StatusUiPathTestManagerTestCasesApi Draft = new("Draft");

    public static readonly StatusUiPathTestManagerTestCasesApi Active = new("Active");

    public static readonly StatusUiPathTestManagerTestCasesApi Deprecated = new("Deprecated");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onActive,
        Func<TResult> onDeprecated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ when this == Deprecated => onDeprecated(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action onDeprecated, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else if (this == Deprecated) onDeprecated();
        else otherwise(Value);
    }
}
