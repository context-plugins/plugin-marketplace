using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreditsCurrenciesGetParametersStatus>))]
public sealed record CreditsCurrenciesGetParametersStatus : OpenStringEnum<CreditsCurrenciesGetParametersStatus>
{
    private CreditsCurrenciesGetParametersStatus(string value) : base(value)
    {
    }

    public static readonly CreditsCurrenciesGetParametersStatus Active = new("active");

    public static readonly CreditsCurrenciesGetParametersStatus Archived = new("archived");

    public static readonly CreditsCurrenciesGetParametersStatus All = new("all");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onArchived,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action onAll, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
