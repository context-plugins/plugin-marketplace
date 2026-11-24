using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Credit Status DTO.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreditStatusDto>))]
public sealed record CreditStatusDto : OpenStringEnum<CreditStatusDto>
{
    private CreditStatusDto(string value) : base(value)
    {
    }

    public static readonly CreditStatusDto FullyApplied = new("FULLY_APPLIED");

    public static readonly CreditStatusDto NotApplied = new("NOT_APPLIED");

    public static readonly CreditStatusDto PartiallyApplied = new("PARTIALLY_APPLIED");

    public static readonly CreditStatusDto InProcess = new("IN_PROCESS");

    public static readonly CreditStatusDto Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onFullyApplied,
        Func<TResult> onNotApplied,
        Func<TResult> onPartiallyApplied,
        Func<TResult> onInProcess,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FullyApplied => onFullyApplied(),
            _ when this == NotApplied => onNotApplied(),
            _ when this == PartiallyApplied => onPartiallyApplied(),
            _ when this == InProcess => onInProcess(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onFullyApplied,
        Action onNotApplied,
        Action onPartiallyApplied,
        Action onInProcess,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == FullyApplied) onFullyApplied();
        else if (this == NotApplied) onNotApplied();
        else if (this == PartiallyApplied) onPartiallyApplied();
        else if (this == InProcess) onInProcess();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
