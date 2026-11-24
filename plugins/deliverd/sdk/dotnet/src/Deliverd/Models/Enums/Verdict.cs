using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// approve or reject
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Verdict>))]
public sealed record Verdict : OpenStringEnum<Verdict>
{
    private Verdict(string value) : base(value)
    {
    }

    public static readonly Verdict Approve = new("approve");

    public static readonly Verdict Reject = new("reject");

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
