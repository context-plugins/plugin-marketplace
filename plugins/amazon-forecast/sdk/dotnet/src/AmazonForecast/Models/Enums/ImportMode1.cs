using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The import mode of the dataset import job, FULL or INCREMENTAL.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ImportMode1>))]
public sealed record ImportMode1 : OpenStringEnum<ImportMode1>
{
    private ImportMode1(string value) : base(value)
    {
    }

    public static readonly ImportMode1 Full = new("FULL");

    public static readonly ImportMode1 Incremental = new("INCREMENTAL");

    public TResult Match<TResult>(Func<TResult> onFull, Func<TResult> onIncremental, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Full => onFull(),
            _ when this == Incremental => onIncremental(),
            _ => otherwise(Value)
        };

    public void Match(Action onFull, Action onIncremental, Action<string> otherwise)
    {
        if (this == Full) onFull();
        else if (this == Incremental) onIncremental();
        else otherwise(Value);
    }
}
