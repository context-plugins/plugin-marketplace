using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The name of the third-party processor associated with the <c>Transfer</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type32>))]
public sealed record Type32 : OpenStringEnum<Type32>
{
    private Type32(string value) : base(value)
    {
    }

    public static readonly Type32 Cybersource = new("CYBERSOURCE");

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
