using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// created: awaiting payment. attempted: payment attempted but not captured. paid: fully paid.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpayOrdersApi>))]
public sealed record StatusRazorpayOrdersApi : OpenStringEnum<StatusRazorpayOrdersApi>
{
    private StatusRazorpayOrdersApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayOrdersApi Created = new("created");

    public static readonly StatusRazorpayOrdersApi Attempted = new("attempted");

    public static readonly StatusRazorpayOrdersApi Paid = new("paid");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onAttempted,
        Func<TResult> onPaid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Attempted => onAttempted(),
            _ when this == Paid => onPaid(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onAttempted, Action onPaid, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Attempted) onAttempted();
        else if (this == Paid) onPaid();
        else otherwise(Value);
    }
}
