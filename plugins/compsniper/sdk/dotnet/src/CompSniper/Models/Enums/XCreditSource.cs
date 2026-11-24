using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XCreditSource>))]
public sealed record XCreditSource : OpenStringEnum<XCreditSource>
{
    private XCreditSource(string value) : base(value)
    {
    }

    public static readonly XCreditSource Credits = new("credits");

    public TResult Match<TResult>(Func<TResult> onCredits, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Credits => onCredits(),
            _ => otherwise(Value)
        };

    public void Match(Action onCredits, Action<string> otherwise)
    {
        if (this == Credits) onCredits();
        else otherwise(Value);
    }
}
