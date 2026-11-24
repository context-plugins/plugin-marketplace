using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. The type of feedback being submitted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FeedbackType>))]
public sealed record FeedbackType : OpenStringEnum<FeedbackType>
{
    private FeedbackType(string value) : base(value)
    {
    }

    public static readonly FeedbackType FeedbackTypeUnspecified = new("FEEDBACK_TYPE_UNSPECIFIED");

    public static readonly FeedbackType ExcludedDetection = new("EXCLUDED_DETECTION");

    public TResult Match<TResult>(Func<TResult> onFeedbackTypeUnspecified,
        Func<TResult> onExcludedDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FeedbackTypeUnspecified => onFeedbackTypeUnspecified(),
            _ when this == ExcludedDetection => onExcludedDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onFeedbackTypeUnspecified, Action onExcludedDetection, Action<string> otherwise)
    {
        if (this == FeedbackTypeUnspecified) onFeedbackTypeUnspecified();
        else if (this == ExcludedDetection) onExcludedDetection();
        else otherwise(Value);
    }
}
