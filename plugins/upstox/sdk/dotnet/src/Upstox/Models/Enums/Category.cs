using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Investor category to apply under. Must be one the issue accepts — see <c>investors[].category</c> in the IPO details API
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Ind = new("IND");

    public static readonly Category Hni = new("HNI");

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
