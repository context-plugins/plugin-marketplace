using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// The enum Tax id type enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TaxIdTypeRequest>))]
public sealed record TaxIdTypeRequest : OpenStringEnum<TaxIdTypeRequest>
{
    private TaxIdTypeRequest(string value) : base(value)
    {
    }

    public static readonly TaxIdTypeRequest Ein = new("EIN");

    public static readonly TaxIdTypeRequest Ssn = new("SSN");

    public TResult Match<TResult>(Func<TResult> onEin, Func<TResult> onSsn, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ein => onEin(),
            _ when this == Ssn => onSsn(),
            _ => otherwise(Value)
        };

    public void Match(Action onEin, Action onSsn, Action<string> otherwise)
    {
        if (this == Ein) onEin();
        else if (this == Ssn) onSsn();
        else otherwise(Value);
    }
}
