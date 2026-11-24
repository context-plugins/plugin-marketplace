using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReasonDoiTBudgetSuggestionsApi>))]
public sealed record ReasonDoiTBudgetSuggestionsApi : OpenStringEnum<ReasonDoiTBudgetSuggestionsApi>
{
    private ReasonDoiTBudgetSuggestionsApi(string value) : base(value)
    {
    }

    public static readonly ReasonDoiTBudgetSuggestionsApi NotRelevant = new("not_relevant");

    public static readonly ReasonDoiTBudgetSuggestionsApi WrongAmount = new("wrong_amount");

    public static readonly ReasonDoiTBudgetSuggestionsApi CoveredElsewhere = new("covered_elsewhere");

    public static readonly ReasonDoiTBudgetSuggestionsApi Other = new("other");

    public TResult Match<TResult>(Func<TResult> onNotRelevant,
        Func<TResult> onWrongAmount,
        Func<TResult> onCoveredElsewhere,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotRelevant => onNotRelevant(),
            _ when this == WrongAmount => onWrongAmount(),
            _ when this == CoveredElsewhere => onCoveredElsewhere(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotRelevant,
        Action onWrongAmount,
        Action onCoveredElsewhere,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == NotRelevant) onNotRelevant();
        else if (this == WrongAmount) onWrongAmount();
        else if (this == CoveredElsewhere) onCoveredElsewhere();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
