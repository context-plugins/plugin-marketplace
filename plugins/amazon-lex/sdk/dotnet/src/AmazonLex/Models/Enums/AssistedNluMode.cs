using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies the mode for Assisted NLU operation. Use Primary to make Assisted NLU the primary intent recognition method, Fallback to use it only when standard NLU confidence is low, or DialogManager to use a large language model to manage the conversation, including intent recognition, slot elicitation, and confirmation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AssistedNluMode>))]
public sealed record AssistedNluMode : OpenStringEnum<AssistedNluMode>
{
    private AssistedNluMode(string value) : base(value)
    {
    }

    public static readonly AssistedNluMode Primary = new("Primary");

    public static readonly AssistedNluMode Fallback = new("Fallback");

    public static readonly AssistedNluMode DialogManager = new("DialogManager");

    public TResult Match<TResult>(Func<TResult> onPrimary,
        Func<TResult> onFallback,
        Func<TResult> onDialogManager,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Primary => onPrimary(),
            _ when this == Fallback => onFallback(),
            _ when this == DialogManager => onDialogManager(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrimary, Action onFallback, Action onDialogManager, Action<string> otherwise)
    {
        if (this == Primary) onPrimary();
        else if (this == Fallback) onFallback();
        else if (this == DialogManager) onDialogManager();
        else otherwise(Value);
    }
}
