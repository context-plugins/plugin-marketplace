using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The contract status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1DoiTContractsApi>))]
public sealed record Status1DoiTContractsApi : OpenStringEnum<Status1DoiTContractsApi>
{
    private Status1DoiTContractsApi(string value) : base(value)
    {
    }

    public static readonly Status1DoiTContractsApi Draft = new("draft");

    public static readonly Status1DoiTContractsApi Scheduled = new("scheduled");

    public static readonly Status1DoiTContractsApi Active = new("active");

    public static readonly Status1DoiTContractsApi Cancelled = new("cancelled");

    public static readonly Status1DoiTContractsApi Expired = new("expired");

    public static readonly Status1DoiTContractsApi Superseded = new("superseded");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onScheduled,
        Func<TResult> onActive,
        Func<TResult> onCancelled,
        Func<TResult> onExpired,
        Func<TResult> onSuperseded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Scheduled => onScheduled(),
            _ when this == Active => onActive(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Expired => onExpired(),
            _ when this == Superseded => onSuperseded(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onScheduled,
        Action onActive,
        Action onCancelled,
        Action onExpired,
        Action onSuperseded,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Scheduled) onScheduled();
        else if (this == Active) onActive();
        else if (this == Cancelled) onCancelled();
        else if (this == Expired) onExpired();
        else if (this == Superseded) onSuperseded();
        else otherwise(Value);
    }
}
