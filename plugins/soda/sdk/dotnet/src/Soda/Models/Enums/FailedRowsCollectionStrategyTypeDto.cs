using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FailedRowsCollectionStrategyTypeDto>))]
public sealed record FailedRowsCollectionStrategyTypeDto : OpenStringEnum<FailedRowsCollectionStrategyTypeDto>
{
    private FailedRowsCollectionStrategyTypeDto(string value) : base(value)
    {
    }

    public static readonly FailedRowsCollectionStrategyTypeDto UseDefaultMaxRowCount = new("useDefaultMaxRowCount");

    public static readonly FailedRowsCollectionStrategyTypeDto Absolute = new("absolute");

    public static readonly FailedRowsCollectionStrategyTypeDto Percentage = new("percentage");

    public TResult Match<TResult>(Func<TResult> onUseDefaultMaxRowCount,
        Func<TResult> onAbsolute,
        Func<TResult> onPercentage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UseDefaultMaxRowCount => onUseDefaultMaxRowCount(),
            _ when this == Absolute => onAbsolute(),
            _ when this == Percentage => onPercentage(),
            _ => otherwise(Value)
        };

    public void Match(Action onUseDefaultMaxRowCount, Action onAbsolute, Action onPercentage, Action<string> otherwise)
    {
        if (this == UseDefaultMaxRowCount) onUseDefaultMaxRowCount();
        else if (this == Absolute) onAbsolute();
        else if (this == Percentage) onPercentage();
        else otherwise(Value);
    }
}
