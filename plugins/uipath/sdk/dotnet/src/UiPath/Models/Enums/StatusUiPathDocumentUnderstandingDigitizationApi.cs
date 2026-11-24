using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Outcome of the digitization operation
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusUiPathDocumentUnderstandingDigitizationApi>))]
public sealed record StatusUiPathDocumentUnderstandingDigitizationApi : OpenStringEnum<StatusUiPathDocumentUnderstandingDigitizationApi>
{
    private StatusUiPathDocumentUnderstandingDigitizationApi(string value) : base(value)
    {
    }

    public static readonly StatusUiPathDocumentUnderstandingDigitizationApi Succeeded = new("Succeeded");

    public static readonly StatusUiPathDocumentUnderstandingDigitizationApi Failed = new("Failed");

    public TResult Match<TResult>(Func<TResult> onSucceeded, Func<TResult> onFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSucceeded, Action onFailed, Action<string> otherwise)
    {
        if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
