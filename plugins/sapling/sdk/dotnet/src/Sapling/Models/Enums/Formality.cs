using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Optional register: "formal" (vous/Sie/usted) or "informal" (tu/du/tú). Omit for the model default.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Formality>))]
public sealed record Formality : OpenStringEnum<Formality>
{
    private Formality(string value) : base(value)
    {
    }

    public static readonly Formality Formal = new("formal");

    public static readonly Formality Informal = new("informal");

    public TResult Match<TResult>(Func<TResult> onFormal, Func<TResult> onInformal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Formal => onFormal(),
            _ when this == Informal => onInformal(),
            _ => otherwise(Value)
        };

    public void Match(Action onFormal, Action onInformal, Action<string> otherwise)
    {
        if (this == Formal) onFormal();
        else if (this == Informal) onInformal();
        else otherwise(Value);
    }
}
