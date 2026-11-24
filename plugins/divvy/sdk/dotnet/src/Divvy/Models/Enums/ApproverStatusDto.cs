using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Approver status DTO.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApproverStatusDto>))]
public sealed record ApproverStatusDto : OpenStringEnum<ApproverStatusDto>
{
    private ApproverStatusDto(string value) : base(value)
    {
    }

    public static readonly ApproverStatusDto Waiting = new("WAITING");

    public static readonly ApproverStatusDto Viewed = new("VIEWED");

    public static readonly ApproverStatusDto Rerouted = new("REROUTED");

    public static readonly ApproverStatusDto Denied = new("DENIED");

    public static readonly ApproverStatusDto Approved = new("APPROVED");

    public static readonly ApproverStatusDto Upcoming = new("UPCOMING");

    public static readonly ApproverStatusDto Stale = new("STALE");

    public static readonly ApproverStatusDto Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onWaiting,
        Func<TResult> onViewed,
        Func<TResult> onRerouted,
        Func<TResult> onDenied,
        Func<TResult> onApproved,
        Func<TResult> onUpcoming,
        Func<TResult> onStale,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Waiting => onWaiting(),
            _ when this == Viewed => onViewed(),
            _ when this == Rerouted => onRerouted(),
            _ when this == Denied => onDenied(),
            _ when this == Approved => onApproved(),
            _ when this == Upcoming => onUpcoming(),
            _ when this == Stale => onStale(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onWaiting,
        Action onViewed,
        Action onRerouted,
        Action onDenied,
        Action onApproved,
        Action onUpcoming,
        Action onStale,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Waiting) onWaiting();
        else if (this == Viewed) onViewed();
        else if (this == Rerouted) onRerouted();
        else if (this == Denied) onDenied();
        else if (this == Approved) onApproved();
        else if (this == Upcoming) onUpcoming();
        else if (this == Stale) onStale();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
