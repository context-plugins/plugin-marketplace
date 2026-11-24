using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// Credit grants are active immediately when created.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreditGrantResultStatus>))]
public sealed record CreditGrantResultStatus : OpenStringEnum<CreditGrantResultStatus>
{
    private CreditGrantResultStatus(string value) : base(value)
    {
    }

    public static readonly CreditGrantResultStatus Active = new("active");

    public TResult Match<TResult>(Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else otherwise(Value);
    }
}
