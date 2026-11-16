using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Specifies the <see href="/api/gateway-integrations">Gateway Integration</see> linked to the <see href="/api/merchants">Merchant</see>. If the merchant is not linked to a <c>Gateway Integration</c>, this field will be <c>null</c>. At this time, <c>CYBERSOURCE</c> is the only supported <c>Gateway Integration</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubType>))]
public sealed record SubType : OpenStringEnum<SubType>
{
    private SubType(string value) : base(value)
    {
    }

    public static readonly SubType Cybersource = new("CYBERSOURCE");

    public TResult Match<TResult>(Func<TResult> onCybersource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cybersource => onCybersource(),
            _ => otherwise(Value)
        };

    public void Match(Action onCybersource, Action<string> otherwise)
    {
        if (this == Cybersource) onCybersource();
        else otherwise(Value);
    }
}
