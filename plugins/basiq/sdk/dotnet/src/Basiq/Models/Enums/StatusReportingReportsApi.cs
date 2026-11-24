using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Identifies if a transaction is pending or posted. A pending transaction is an approved debit or credit transaction that has not been fully processed yet (i.e. has not been posted). Find out more about pending transaction and how to deal with them within your app. Note that pending transactions are not available for all institutions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusReportingReportsApi>))]
public sealed record StatusReportingReportsApi : OpenStringEnum<StatusReportingReportsApi>
{
    private StatusReportingReportsApi(string value) : base(value)
    {
    }

    public static readonly StatusReportingReportsApi Pending = new("pending");

    public static readonly StatusReportingReportsApi Posted = new("posted");

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
