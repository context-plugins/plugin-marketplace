using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDoiTBudgetSuggestionsApi>))]
public sealed record StatusDoiTBudgetSuggestionsApi : OpenStringEnum<StatusDoiTBudgetSuggestionsApi>
{
    private StatusDoiTBudgetSuggestionsApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTBudgetSuggestionsApi Pending = new("pending");

    public static readonly StatusDoiTBudgetSuggestionsApi Accepted = new("accepted");

    public static readonly StatusDoiTBudgetSuggestionsApi Dismissed = new("dismissed");

    public static readonly StatusDoiTBudgetSuggestionsApi SkippedDraft = new("skippedDraft");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onAccepted,
        Func<TResult> onDismissed,
        Func<TResult> onSkippedDraft,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Accepted => onAccepted(),
            _ when this == Dismissed => onDismissed(),
            _ when this == SkippedDraft => onSkippedDraft(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onAccepted,
        Action onDismissed,
        Action onSkippedDraft,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Accepted) onAccepted();
        else if (this == Dismissed) onDismissed();
        else if (this == SkippedDraft) onSkippedDraft();
        else otherwise(Value);
    }
}
