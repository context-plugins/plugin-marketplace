using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides a code indicating the reason why a specific analytics feature was skipped during the analysis of a call analytics job.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReasonCode>))]
public sealed record ReasonCode : OpenStringEnum<ReasonCode>
{
    private ReasonCode(string value) : base(value)
    {
    }

    public static readonly ReasonCode InsufficientConversationContent = new("INSUFFICIENT_CONVERSATION_CONTENT");

    public static readonly ReasonCode FailedSafetyGuidelines = new("FAILED_SAFETY_GUIDELINES");

    public TResult Match<TResult>(Func<TResult> onInsufficientConversationContent,
        Func<TResult> onFailedSafetyGuidelines,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InsufficientConversationContent => onInsufficientConversationContent(),
            _ when this == FailedSafetyGuidelines => onFailedSafetyGuidelines(),
            _ => otherwise(Value)
        };

    public void Match(Action onInsufficientConversationContent,
        Action onFailedSafetyGuidelines,
        Action<string> otherwise)
    {
        if (this == InsufficientConversationContent) onInsufficientConversationContent();
        else if (this == FailedSafetyGuidelines) onFailedSafetyGuidelines();
        else otherwise(Value);
    }
}
