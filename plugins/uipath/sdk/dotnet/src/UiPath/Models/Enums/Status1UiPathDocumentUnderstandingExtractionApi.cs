using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Current status of the extraction job
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1UiPathDocumentUnderstandingExtractionApi>))]
public sealed record Status1UiPathDocumentUnderstandingExtractionApi : OpenStringEnum<Status1UiPathDocumentUnderstandingExtractionApi>
{
    private Status1UiPathDocumentUnderstandingExtractionApi(string value) : base(value)
    {
    }

    public static readonly Status1UiPathDocumentUnderstandingExtractionApi NotStarted = new("NotStarted");

    public static readonly Status1UiPathDocumentUnderstandingExtractionApi Running = new("Running");

    public static readonly Status1UiPathDocumentUnderstandingExtractionApi Failed = new("Failed");

    public static readonly Status1UiPathDocumentUnderstandingExtractionApi Succeeded = new("Succeeded");

    public TResult Match<TResult>(Func<TResult> onNotStarted,
        Func<TResult> onRunning,
        Func<TResult> onFailed,
        Func<TResult> onSucceeded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotStarted => onNotStarted(),
            _ when this == Running => onRunning(),
            _ when this == Failed => onFailed(),
            _ when this == Succeeded => onSucceeded(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotStarted,
        Action onRunning,
        Action onFailed,
        Action onSucceeded,
        Action<string> otherwise)
    {
        if (this == NotStarted) onNotStarted();
        else if (this == Running) onRunning();
        else if (this == Failed) onFailed();
        else if (this == Succeeded) onSucceeded();
        else otherwise(Value);
    }
}
