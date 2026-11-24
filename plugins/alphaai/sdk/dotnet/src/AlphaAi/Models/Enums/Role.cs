using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// <c>independent</c> counts toward the cluster. <c>plan_like</c>: the buyer's fills all share an exact date-and-price pair with another buyer's (an allocation, an ESPP/DRIP lot), match another direct holder's lot at a round price, or the filing itself says the shares were not bought on the open market (then <c>reason</c> is set). <c>unpriced</c>: no fill carries a price (units, exchanges). <c>duplicate_of</c>: the same transaction another reporter already reported; <c>duplicate_of</c> names that reporter.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Role>))]
public sealed record Role : OpenStringEnum<Role>
{
    private Role(string value) : base(value)
    {
    }

    public static readonly Role Independent = new("independent");

    public static readonly Role PlanLike = new("plan_like");

    public static readonly Role Unpriced = new("unpriced");

    public static readonly Role DuplicateOf = new("duplicate_of");

    public TResult Match<TResult>(Func<TResult> onIndependent,
        Func<TResult> onPlanLike,
        Func<TResult> onUnpriced,
        Func<TResult> onDuplicateOf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Independent => onIndependent(),
            _ when this == PlanLike => onPlanLike(),
            _ when this == Unpriced => onUnpriced(),
            _ when this == DuplicateOf => onDuplicateOf(),
            _ => otherwise(Value)
        };

    public void Match(Action onIndependent,
        Action onPlanLike,
        Action onUnpriced,
        Action onDuplicateOf,
        Action<string> otherwise)
    {
        if (this == Independent) onIndependent();
        else if (this == PlanLike) onPlanLike();
        else if (this == Unpriced) onUnpriced();
        else if (this == DuplicateOf) onDuplicateOf();
        else otherwise(Value);
    }
}
