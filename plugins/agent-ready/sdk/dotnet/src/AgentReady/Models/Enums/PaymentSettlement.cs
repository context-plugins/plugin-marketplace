using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

/// <summary>
/// Present only when the scan succeeded but on-chain settlement did not. The result is still returned rather than failing a paid caller.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentSettlement>))]
public sealed record PaymentSettlement : OpenStringEnum<PaymentSettlement>
{
    private PaymentSettlement(string value) : base(value)
    {
    }

    public static readonly PaymentSettlement Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onFailed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed, Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
