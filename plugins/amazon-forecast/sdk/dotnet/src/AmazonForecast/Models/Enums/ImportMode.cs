using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// Specifies whether the dataset import job is a FULL or INCREMENTAL import. A FULL dataset import replaces all of the existing data with the newly imported data. An INCREMENTAL import appends the imported data to the existing data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ImportMode>))]
public sealed record ImportMode : OpenStringEnum<ImportMode>
{
    private ImportMode(string value) : base(value)
    {
    }

    public static readonly ImportMode Full = new("FULL");

    public static readonly ImportMode Incremental = new("INCREMENTAL");

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
