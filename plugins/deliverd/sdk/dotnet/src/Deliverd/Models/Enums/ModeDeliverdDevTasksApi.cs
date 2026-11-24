using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModeDeliverdDevTasksApi>))]
public sealed record ModeDeliverdDevTasksApi : OpenStringEnum<ModeDeliverdDevTasksApi>
{
    private ModeDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly ModeDeliverdDevTasksApi Allowed = new("allowed");

    public static readonly ModeDeliverdDevTasksApi Approval = new("approval");

    public static readonly ModeDeliverdDevTasksApi Denied = new("denied");

    public TResult Match<TResult>(Func<TResult> onAllowed,
        Func<TResult> onApproval,
        Func<TResult> onDenied,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allowed => onAllowed(),
            _ when this == Approval => onApproval(),
            _ when this == Denied => onDenied(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllowed, Action onApproval, Action onDenied, Action<string> otherwise)
    {
        if (this == Allowed) onAllowed();
        else if (this == Approval) onApproval();
        else if (this == Denied) onDenied();
        else otherwise(Value);
    }
}
