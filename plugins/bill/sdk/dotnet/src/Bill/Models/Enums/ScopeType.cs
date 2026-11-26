using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Network name. You can search in one or both networks.
/// * Select <c>BILL</c> for BILL Network
/// * Select <c>RPPS</c> for verified national vendor network
/// * Select <c>ALL</c> for both networks
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScopeType>))]
public sealed record ScopeType : OpenStringEnum<ScopeType>
{
    private ScopeType(string value) : base(value)
    {
    }

    public static readonly ScopeType Bill = new("BILL");

    public static readonly ScopeType Rpps = new("RPPS");

    public static readonly ScopeType All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onBill,
        Func<TResult> onRpps,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bill => onBill(),
            _ when this == Rpps => onRpps(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onBill, Action onRpps, Action onAll, Action<string> otherwise)
    {
        if (this == Bill) onBill();
        else if (this == Rpps) onRpps();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
