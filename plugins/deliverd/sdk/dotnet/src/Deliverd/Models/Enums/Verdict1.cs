using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Verdict1>))]
public sealed record Verdict1 : OpenStringEnum<Verdict1>
{
    private Verdict1(string value) : base(value)
    {
    }

    public static readonly Verdict1 Approve = new("approve");

    public static readonly Verdict1 Reject = new("reject");

    public TResult Match<TResult>(Func<TResult> onApprove, Func<TResult> onReject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approve => onApprove(),
            _ when this == Reject => onReject(),
            _ => otherwise(Value)
        };

    public void Match(Action onApprove, Action onReject, Action<string> otherwise)
    {
        if (this == Approve) onApprove();
        else if (this == Reject) onReject();
        else otherwise(Value);
    }
}
