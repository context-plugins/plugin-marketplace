using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1DoiTBudgetSuggestionsApi>))]
public sealed record Status1DoiTBudgetSuggestionsApi : OpenStringEnum<Status1DoiTBudgetSuggestionsApi>
{
    private Status1DoiTBudgetSuggestionsApi(string value) : base(value)
    {
    }

    public static readonly Status1DoiTBudgetSuggestionsApi Dismissed = new("dismissed");

    public TResult Match<TResult>(Func<TResult> onDismissed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dismissed => onDismissed(),
            _ => otherwise(Value)
        };

    public void Match(Action onDismissed, Action<string> otherwise)
    {
        if (this == Dismissed) onDismissed();
        else otherwise(Value);
    }
}
