using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<DiagnosticsWarehouseFailedRowsStorageStrategyDto>))]
public sealed record DiagnosticsWarehouseFailedRowsStorageStrategyDto : OpenStringEnum<DiagnosticsWarehouseFailedRowsStorageStrategyDto>
{
    private DiagnosticsWarehouseFailedRowsStorageStrategyDto(string value) : base(value)
    {
    }

    public static readonly DiagnosticsWarehouseFailedRowsStorageStrategyDto FullFailedRows = new("fullFailedRows");

    public static readonly DiagnosticsWarehouseFailedRowsStorageStrategyDto UniqueKeys = new("uniqueKeys");

    public static readonly DiagnosticsWarehouseFailedRowsStorageStrategyDto ScansAndResultsOnly = new(
        "scansAndResultsOnly");

    public TResult Match<TResult>(Func<TResult> onFullFailedRows,
        Func<TResult> onUniqueKeys,
        Func<TResult> onScansAndResultsOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FullFailedRows => onFullFailedRows(),
            _ when this == UniqueKeys => onUniqueKeys(),
            _ when this == ScansAndResultsOnly => onScansAndResultsOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onFullFailedRows,
        Action onUniqueKeys,
        Action onScansAndResultsOnly,
        Action<string> otherwise)
    {
        if (this == FullFailedRows) onFullFailedRows();
        else if (this == UniqueKeys) onUniqueKeys();
        else if (this == ScansAndResultsOnly) onScansAndResultsOnly();
        else otherwise(Value);
    }
}
