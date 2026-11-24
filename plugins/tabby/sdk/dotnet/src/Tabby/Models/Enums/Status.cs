using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Status of the current session. Used at the pre-scoring and session creation steps.
///   - <c>created</c> is returned when the request is approved and the customer is eligible to use Tabby
///   - <c>rejected</c> means that there are no available products for a customer
///   - <c>expired</c> and <c>approved</c> - used for specific type of integration, kindly ignore them if not communicated directly
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Created = new("created");

    public static readonly Status Rejected = new("rejected");

    public static readonly Status Expired = new("expired");

    public static readonly Status Approved = new("approved");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onRejected,
        Func<TResult> onExpired,
        Func<TResult> onApproved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Rejected => onRejected(),
            _ when this == Expired => onExpired(),
            _ when this == Approved => onApproved(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onRejected,
        Action onExpired,
        Action onApproved,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Rejected) onRejected();
        else if (this == Expired) onExpired();
        else if (this == Approved) onApproved();
        else otherwise(Value);
    }
}
