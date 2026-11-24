using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Value indicating the number of customers that have ownership of the account, according to the data holder's definition of account ownership. Does not indicate that all account owners are eligible consumers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccountOwnership>))]
public sealed record AccountOwnership : OpenStringEnum<AccountOwnership>
{
    private AccountOwnership(string value) : base(value)
    {
    }

    public static readonly AccountOwnership Unknown = new("UNKNOWN");

    public static readonly AccountOwnership OneParty = new("ONE_PARTY");

    public static readonly AccountOwnership TwoParty = new("TWO_PARTY");

    public static readonly AccountOwnership ManyParty = new("MANY_PARTY");

    public static readonly AccountOwnership Other = new("OTHER");

    public TResult Match<TResult>(Func<TResult> onUnknown,
        Func<TResult> onOneParty,
        Func<TResult> onTwoParty,
        Func<TResult> onManyParty,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ when this == OneParty => onOneParty(),
            _ when this == TwoParty => onTwoParty(),
            _ when this == ManyParty => onManyParty(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown,
        Action onOneParty,
        Action onTwoParty,
        Action onManyParty,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else if (this == OneParty) onOneParty();
        else if (this == TwoParty) onTwoParty();
        else if (this == ManyParty) onManyParty();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
