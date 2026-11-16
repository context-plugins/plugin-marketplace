using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of <c>Gateway Integration</c>. At this time, the only supported value is <c>CYBERSOURCE</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type9>))]
public sealed record Type9 : OpenStringEnum<Type9>
{
    private Type9(string value) : base(value)
    {
    }

    public static readonly Type9 Cybersource = new("CYBERSOURCE");

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
