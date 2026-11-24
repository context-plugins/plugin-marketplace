using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Why the QR code was closed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CloseReason>))]
public sealed record CloseReason : OpenStringEnum<CloseReason>
{
    private CloseReason(string value) : base(value)
    {
    }

    public static readonly CloseReason OnDemand = new("on_demand");

    public static readonly CloseReason Paid = new("paid");

    public TResult Match<TResult>(Func<TResult> onOnDemand, Func<TResult> onPaid, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OnDemand => onOnDemand(),
            _ when this == Paid => onPaid(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnDemand, Action onPaid, Action<string> otherwise)
    {
        if (this == OnDemand) onOnDemand();
        else if (this == Paid) onPaid();
        else otherwise(Value);
    }
}
