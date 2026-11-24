using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The contract status after the operation (<c>active</c>, <c>scheduled</c>, or <c>cancelled</c>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusDoiTContractsApi>))]
public sealed record StatusDoiTContractsApi : OpenStringEnum<StatusDoiTContractsApi>
{
    private StatusDoiTContractsApi(string value) : base(value)
    {
    }

    public static readonly StatusDoiTContractsApi Active = new("active");

    public static readonly StatusDoiTContractsApi Scheduled = new("scheduled");

    public static readonly StatusDoiTContractsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onScheduled,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onScheduled, Action onCancelled, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Scheduled) onScheduled();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
