using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies which results to filter. See Test result details"&gt;Test results details for details about different types of results.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResultTypeFilter>))]
public sealed record ResultTypeFilter : OpenStringEnum<ResultTypeFilter>
{
    private ResultTypeFilter(string value) : base(value)
    {
    }

    public static readonly ResultTypeFilter OverallTestResults = new("OverallTestResults");

    public static readonly ResultTypeFilter ConversationLevelTestResults = new("ConversationLevelTestResults");

    public static readonly ResultTypeFilter IntentClassificationTestResults = new("IntentClassificationTestResults");

    public static readonly ResultTypeFilter SlotResolutionTestResults = new("SlotResolutionTestResults");

    public static readonly ResultTypeFilter UtteranceLevelResults = new("UtteranceLevelResults");

    public TResult Match<TResult>(Func<TResult> onOverallTestResults,
        Func<TResult> onConversationLevelTestResults,
        Func<TResult> onIntentClassificationTestResults,
        Func<TResult> onSlotResolutionTestResults,
        Func<TResult> onUtteranceLevelResults,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OverallTestResults => onOverallTestResults(),
            _ when this == ConversationLevelTestResults => onConversationLevelTestResults(),
            _ when this == IntentClassificationTestResults => onIntentClassificationTestResults(),
            _ when this == SlotResolutionTestResults => onSlotResolutionTestResults(),
            _ when this == UtteranceLevelResults => onUtteranceLevelResults(),
            _ => otherwise(Value)
        };

    public void Match(Action onOverallTestResults,
        Action onConversationLevelTestResults,
        Action onIntentClassificationTestResults,
        Action onSlotResolutionTestResults,
        Action onUtteranceLevelResults,
        Action<string> otherwise)
    {
        if (this == OverallTestResults) onOverallTestResults();
        else if (this == ConversationLevelTestResults) onConversationLevelTestResults();
        else if (this == IntentClassificationTestResults) onIntentClassificationTestResults();
        else if (this == SlotResolutionTestResults) onSlotResolutionTestResults();
        else if (this == UtteranceLevelResults) onUtteranceLevelResults();
        else otherwise(Value);
    }
}
