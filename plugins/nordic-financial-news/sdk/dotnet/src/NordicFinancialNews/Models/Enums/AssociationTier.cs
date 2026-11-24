using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// How the company relates to the article. <c>principal</c> (subject, partner, investor, competitor) is the default set; <c>peripheral</c> (source, advisor, passing mention) appears only when <c>include_peripheral=true</c>. Always present.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AssociationTier>))]
public sealed record AssociationTier : OpenStringEnum<AssociationTier>
{
    private AssociationTier(string value) : base(value)
    {
    }

    public static readonly AssociationTier Principal = new("principal");

    public static readonly AssociationTier Peripheral = new("peripheral");

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
