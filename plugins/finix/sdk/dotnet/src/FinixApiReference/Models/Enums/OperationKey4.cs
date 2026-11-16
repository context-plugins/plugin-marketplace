using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Details the operation that's performed in the authorization.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OperationKey4>))]
public sealed record OperationKey4 : OpenStringEnum<OperationKey4>
{
    private OperationKey4(string value) : base(value)
    {
    }

    public static readonly OperationKey4 Authorization = new("AUTHORIZATION");

    public static readonly OperationKey4 CardPresentAuthorization = new("CARD_PRESENT_AUTHORIZATION");

    public TResult Match<TResult>(Func<TResult> onAuthorization,
        Func<TResult> onCardPresentAuthorization,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Authorization => onAuthorization(),
            _ when this == CardPresentAuthorization => onCardPresentAuthorization(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthorization, Action onCardPresentAuthorization, Action<string> otherwise)
    {
        if (this == Authorization) onAuthorization();
        else if (this == CardPresentAuthorization) onCardPresentAuthorization();
        else otherwise(Value);
    }
}
