using System;
using System.Text.Json.Serialization;
using Lili.Core.Enum;

namespace Lili.Models.Enums;

/// <summary>
/// The payment status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Success = new("SUCCESS");

    public static readonly Status1 AccountNotFound = new("ACCOUNT_NOT_FOUND");

    public static readonly Status1 AccountClosed = new("ACCOUNT_CLOSED");

    public static readonly Status1 NotReleasedEarly = new("NOT_RELEASED_EARLY");

    public static readonly Status1 TechnicalError = new("TECHNICAL_ERROR");

    public static readonly Status1 BadData = new("BAD_DATA");

    public static readonly Status1 EffectiveDatePast = new("EFFECTIVE_DATE_PAST");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onAccountNotFound,
        Func<TResult> onAccountClosed,
        Func<TResult> onNotReleasedEarly,
        Func<TResult> onTechnicalError,
        Func<TResult> onBadData,
        Func<TResult> onEffectiveDatePast,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == AccountNotFound => onAccountNotFound(),
            _ when this == AccountClosed => onAccountClosed(),
            _ when this == NotReleasedEarly => onNotReleasedEarly(),
            _ when this == TechnicalError => onTechnicalError(),
            _ when this == BadData => onBadData(),
            _ when this == EffectiveDatePast => onEffectiveDatePast(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess,
        Action onAccountNotFound,
        Action onAccountClosed,
        Action onNotReleasedEarly,
        Action onTechnicalError,
        Action onBadData,
        Action onEffectiveDatePast,
        Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == AccountNotFound) onAccountNotFound();
        else if (this == AccountClosed) onAccountClosed();
        else if (this == NotReleasedEarly) onNotReleasedEarly();
        else if (this == TechnicalError) onTechnicalError();
        else if (this == BadData) onBadData();
        else if (this == EffectiveDatePast) onEffectiveDatePast();
        else otherwise(Value);
    }
}
