using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// TransactionType.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TransactionTypeBillV3TransactionsApi>))]
public sealed record TransactionTypeBillV3TransactionsApi : OpenStringEnum<TransactionTypeBillV3TransactionsApi>
{
    private TransactionTypeBillV3TransactionsApi(string value) : base(value)
    {
    }

    public static readonly TransactionTypeBillV3TransactionsApi Clear = new("CLEAR");

    public static readonly TransactionTypeBillV3TransactionsApi Decline = new("DECLINE");

    public static readonly TransactionTypeBillV3TransactionsApi Authorization = new("AUTHORIZATION");

    public static readonly TransactionTypeBillV3TransactionsApi Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onClear,
        Func<TResult> onDecline,
        Func<TResult> onAuthorization,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Clear => onClear(),
            _ when this == Decline => onDecline(),
            _ when this == Authorization => onAuthorization(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onClear,
        Action onDecline,
        Action onAuthorization,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Clear) onClear();
        else if (this == Decline) onDecline();
        else if (this == Authorization) onAuthorization();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
