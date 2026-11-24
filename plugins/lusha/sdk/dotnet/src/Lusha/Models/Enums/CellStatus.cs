using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

/// <summary>
/// Current state of a single cell's data. <c>no_data</c> means the run succeeded but found nothing — distinct from <c>failed</c>, which means the run itself errored.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CellStatus>))]
public sealed record CellStatus : OpenStringEnum<CellStatus>
{
    private CellStatus(string value) : base(value)
    {
    }

    public static readonly CellStatus NotRun = new("not_run");

    public static readonly CellStatus Processing = new("processing");

    public static readonly CellStatus Success = new("success");

    public static readonly CellStatus NoData = new("no_data");

    public static readonly CellStatus Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onNotRun,
        Func<TResult> onProcessing,
        Func<TResult> onSuccess,
        Func<TResult> onNoData,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotRun => onNotRun(),
            _ when this == Processing => onProcessing(),
            _ when this == Success => onSuccess(),
            _ when this == NoData => onNoData(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotRun,
        Action onProcessing,
        Action onSuccess,
        Action onNoData,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == NotRun) onNotRun();
        else if (this == Processing) onProcessing();
        else if (this == Success) onSuccess();
        else if (this == NoData) onNoData();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
