using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The day of the week the rule applies to. For DAILY rules, only <c>ALL</c> is supported (i.e., the rule applies to all days).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Day>))]
public sealed record Day : OpenStringEnum<Day>
{
    private Day(string value) : base(value)
    {
    }

    public static readonly Day All = new("ALL");

    public TResult Match<TResult>(Func<TResult> onAll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action<string> otherwise)
    {
        if (this == All) onAll();
        else otherwise(Value);
    }
}
