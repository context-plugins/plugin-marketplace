using System;
using System.Text.Json.Serialization;
using Lili.Core.Enum;

namespace Lili.Models.Enums;

/// <summary>
/// Incorporation type of the business
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BusinessType>))]
public sealed record BusinessType : OpenStringEnum<BusinessType>
{
    private BusinessType(string value) : base(value)
    {
    }

    public static readonly BusinessType Dba = new("DBA");

    public static readonly BusinessType Llc = new("LLC");

    public static readonly BusinessType Mmllc = new("MMLLC");

    public static readonly BusinessType GeneralPartnership = new("GENERAL_PARTNERSHIP");

    public static readonly BusinessType Llp = new("LLP");

    public static readonly BusinessType SCorp = new("S_CORP");

    public static readonly BusinessType Ssn = new("SSN");

    public static readonly BusinessType CCorp = new("C_CORP");

    public TResult Match<TResult>(Func<TResult> onDba,
        Func<TResult> onLlc,
        Func<TResult> onMmllc,
        Func<TResult> onGeneralPartnership,
        Func<TResult> onLlp,
        Func<TResult> onSCorp,
        Func<TResult> onSsn,
        Func<TResult> onCCorp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Dba => onDba(),
            _ when this == Llc => onLlc(),
            _ when this == Mmllc => onMmllc(),
            _ when this == GeneralPartnership => onGeneralPartnership(),
            _ when this == Llp => onLlp(),
            _ when this == SCorp => onSCorp(),
            _ when this == Ssn => onSsn(),
            _ when this == CCorp => onCCorp(),
            _ => otherwise(Value)
        };

    public void Match(Action onDba,
        Action onLlc,
        Action onMmllc,
        Action onGeneralPartnership,
        Action onLlp,
        Action onSCorp,
        Action onSsn,
        Action onCCorp,
        Action<string> otherwise)
    {
        if (this == Dba) onDba();
        else if (this == Llc) onLlc();
        else if (this == Mmllc) onMmllc();
        else if (this == GeneralPartnership) onGeneralPartnership();
        else if (this == Llp) onLlp();
        else if (this == SCorp) onSCorp();
        else if (this == Ssn) onSsn();
        else if (this == CCorp) onCCorp();
        else otherwise(Value);
    }
}
