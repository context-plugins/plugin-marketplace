using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Investor category the issue accepts. Pass this value as category when applying
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Category1>))]
public sealed record Category1 : OpenStringEnum<Category1>
{
    private Category1(string value) : base(value)
    {
    }

    public static readonly Category1 Ind = new("IND");

    public static readonly Category1 Hni = new("HNI");

    public TResult Match<TResult>(Func<TResult> onInd, Func<TResult> onHni, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ind => onInd(),
            _ when this == Hni => onHni(),
            _ => otherwise(Value)
        };

    public void Match(Action onInd, Action onHni, Action<string> otherwise)
    {
        if (this == Ind) onInd();
        else if (this == Hni) onHni();
        else otherwise(Value);
    }
}
