using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// How the company relates to the event. <c>principal</c> (subject, acquirer, target, investor, issuer, partner) is the default set; <c>peripheral</c> (advisor, speaker, passing mention) appears only when <c>include_peripheral=true</c>. Always present.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AssociationTierNordicFinancialNewsEventsApi>))]
public sealed record AssociationTierNordicFinancialNewsEventsApi : OpenStringEnum<AssociationTierNordicFinancialNewsEventsApi>
{
    private AssociationTierNordicFinancialNewsEventsApi(string value) : base(value)
    {
    }

    public static readonly AssociationTierNordicFinancialNewsEventsApi Principal = new("principal");

    public static readonly AssociationTierNordicFinancialNewsEventsApi Peripheral = new("peripheral");

    public TResult Match<TResult>(Func<TResult> onPrincipal,
        Func<TResult> onPeripheral,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Principal => onPrincipal(),
            _ when this == Peripheral => onPeripheral(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrincipal, Action onPeripheral, Action<string> otherwise)
    {
        if (this == Principal) onPrincipal();
        else if (this == Peripheral) onPeripheral();
        else otherwise(Value);
    }
}
