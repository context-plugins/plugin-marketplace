using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// Lifecycle status. <c>active</c>/<c>closed</c> are live (closed = coverage window lapsed but the event stays visible and can reopen). <c>merged</c> = absorbed into another event (see <c>merged_into</c>); <c>removed</c> = withdrawn from the feed (no live articles remain, or it was found to be incorrect). <c>merged</c>/<c>removed</c> never appear in the default list and carry only the tombstone fields.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusNordicFinancialNewsCompaniesApi>))]
public sealed record StatusNordicFinancialNewsCompaniesApi : OpenStringEnum<StatusNordicFinancialNewsCompaniesApi>
{
    private StatusNordicFinancialNewsCompaniesApi(string value) : base(value)
    {
    }

    public static readonly StatusNordicFinancialNewsCompaniesApi Active = new("active");

    public static readonly StatusNordicFinancialNewsCompaniesApi Closed = new("closed");

    public static readonly StatusNordicFinancialNewsCompaniesApi Merged = new("merged");

    public static readonly StatusNordicFinancialNewsCompaniesApi Removed = new("removed");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onClosed,
        Func<TResult> onMerged,
        Func<TResult> onRemoved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Closed => onClosed(),
            _ when this == Merged => onMerged(),
            _ when this == Removed => onRemoved(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onClosed, Action onMerged, Action onRemoved, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Closed) onClosed();
        else if (this == Merged) onMerged();
        else if (this == Removed) onRemoved();
        else otherwise(Value);
    }
}
