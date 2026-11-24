using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// *Conditional* Reflects the approval status of this task. This field is kept in sync with <c>completed</c>, meaning <c>pending</c> translates to false while <c>approved</c>, <c>rejected</c>, and <c>changes_requested</c> translate to true. If you set completed to true, this field will be set to <c>approved</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApprovalStatus>))]
public sealed record ApprovalStatus : OpenStringEnum<ApprovalStatus>
{
    private ApprovalStatus(string value) : base(value)
    {
    }

    public static readonly ApprovalStatus Pending = new("pending");

    public static readonly ApprovalStatus Approved = new("approved");

    public static readonly ApprovalStatus Rejected = new("rejected");

    public static readonly ApprovalStatus ChangesRequested = new("changes_requested");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<TResult> onChangesRequested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onApproved,
        Action onRejected,
        Action onChangesRequested,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else if (this == ChangesRequested) onChangesRequested();
        else otherwise(Value);
    }
}
