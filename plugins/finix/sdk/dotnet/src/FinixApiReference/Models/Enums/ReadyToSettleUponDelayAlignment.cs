using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Indicates whether transaction settlement should be delayed to synchronize the timing of all transactions, including both card and ACH, ensuring they are settled together.
/// <para>
/// Possible values include:
/// </para>
/// <list type="bullet">
///   <item><description><c>ACH</c> - Align all transactions to match the timing of ACH settlements, so card transactions settle at the same speed as ACH transactions.</description></item>
///   <item><description><c>NONE</c> - Default behavior where card transactions settle the next day (T+1) and ACH transactions settle two days later (T+2).</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReadyToSettleUponDelayAlignment>))]
public sealed record ReadyToSettleUponDelayAlignment : OpenStringEnum<ReadyToSettleUponDelayAlignment>
{
    private ReadyToSettleUponDelayAlignment(string value) : base(value)
    {
    }

    public static readonly ReadyToSettleUponDelayAlignment Ach = new("ACH");

    public static readonly ReadyToSettleUponDelayAlignment None = new("NONE");

    public TResult Match<TResult>(Func<TResult> onAch, Func<TResult> onNone, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ach => onAch(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onAch, Action onNone, Action<string> otherwise)
    {
        if (this == Ach) onAch();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
