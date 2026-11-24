using System;
using System.Text.Json.Serialization;
using Sapling.Core.Enum;

namespace Sapling.Models.Enums;

/// <summary>
/// Plain-language summary: mixed when part of the text scores as AI (ai_fraction &gt;= 0.2) or the overall score is &gt;= 0.5 with less than 80% of the text scoring as AI. Absent if the text could not be scored.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Verdict>))]
public sealed record Verdict : OpenStringEnum<Verdict>
{
    private Verdict(string value) : base(value)
    {
    }

    public static readonly Verdict Human = new("human");

    public static readonly Verdict Mixed = new("mixed");

    public static readonly Verdict Ai = new("ai");

    public TResult Match<TResult>(Func<TResult> onHuman,
        Func<TResult> onMixed,
        Func<TResult> onAi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Human => onHuman(),
            _ when this == Mixed => onMixed(),
            _ when this == Ai => onAi(),
            _ => otherwise(Value)
        };

    public void Match(Action onHuman, Action onMixed, Action onAi, Action<string> otherwise)
    {
        if (this == Human) onHuman();
        else if (this == Mixed) onMixed();
        else if (this == Ai) onAi();
        else otherwise(Value);
    }
}
