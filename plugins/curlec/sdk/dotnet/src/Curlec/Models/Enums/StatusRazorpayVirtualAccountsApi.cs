using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// active = accepting payments; closed = no longer accepting payments.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpayVirtualAccountsApi>))]
public sealed record StatusRazorpayVirtualAccountsApi : OpenStringEnum<StatusRazorpayVirtualAccountsApi>
{
    private StatusRazorpayVirtualAccountsApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpayVirtualAccountsApi Active = new("active");

    public static readonly StatusRazorpayVirtualAccountsApi Closed = new("closed");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onClosed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onClosed, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
