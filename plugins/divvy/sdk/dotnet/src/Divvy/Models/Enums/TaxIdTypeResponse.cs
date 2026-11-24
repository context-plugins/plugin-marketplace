using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// The enum Tax id type enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TaxIdTypeResponse>))]
public sealed record TaxIdTypeResponse : OpenStringEnum<TaxIdTypeResponse>
{
    private TaxIdTypeResponse(string value) : base(value)
    {
    }

    public static readonly TaxIdTypeResponse Ein = new("EIN");

    public static readonly TaxIdTypeResponse Ssn = new("SSN");

    public static readonly TaxIdTypeResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onEin,
        Func<TResult> onSsn,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ein => onEin(),
            _ when this == Ssn => onSsn(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onEin, Action onSsn, Action onUndefined, Action<string> otherwise)
    {
        if (this == Ein) onEin();
        else if (this == Ssn) onSsn();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
