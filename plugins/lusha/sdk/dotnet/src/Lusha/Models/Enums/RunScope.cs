using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// Controls which rows a column operation applies to. <c>all</c> re-runs every row, including already-processed ones. <c>missing</c> only runs rows that don't have a value for this column yet. <c>specific</c> requires <c>entityIds</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RunScope>))]
public sealed record RunScope : OpenStringEnum<RunScope>
{
    private RunScope(string value) : base(value)
    {
    }

    public static readonly RunScope All = new("all");

    public static readonly RunScope Missing = new("missing");

    public static readonly RunScope Specific = new("specific");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onMissing,
        Func<TResult> onSpecific,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Missing => onMissing(),
            _ when this == Specific => onSpecific(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onMissing, Action onSpecific, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Missing) onMissing();
        else if (this == Specific) onSpecific();
        else otherwise(Value);
    }
}
