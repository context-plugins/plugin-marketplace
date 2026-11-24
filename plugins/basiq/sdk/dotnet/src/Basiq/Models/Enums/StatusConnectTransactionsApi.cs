using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Identifies if a transaction is pending or posted. A pending transaction is an approved debit or credit transaction that has not been fully processed yet (i.e. has not been posted). Note that pending transactions are not available for all institutions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusConnectTransactionsApi>))]
public sealed record StatusConnectTransactionsApi : OpenStringEnum<StatusConnectTransactionsApi>
{
    private StatusConnectTransactionsApi(string value) : base(value)
    {
    }

    public static readonly StatusConnectTransactionsApi Pending = new("pending");

    public static readonly StatusConnectTransactionsApi Posted = new("posted");

    public TResult Match<TResult>(Func<TResult> onPending, Func<TResult> onPosted, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Posted => onPosted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onPosted, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Posted) onPosted();
        else otherwise(Value);
    }
}
