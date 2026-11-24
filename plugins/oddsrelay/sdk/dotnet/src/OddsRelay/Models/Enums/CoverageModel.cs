using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CoverageModel>))]
public sealed record CoverageModel : OpenStringEnum<CoverageModel>
{
    private CoverageModel(string value) : base(value)
    {
    }

    public static readonly CoverageModel Matched = new("matched");

    public static readonly CoverageModel Dutching = new("dutching");

    public TResult Match<TResult>(Func<TResult> onMatched, Func<TResult> onDutching, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Matched => onMatched(),
            _ when this == Dutching => onDutching(),
            _ => otherwise(Value)
        };

    public void Match(Action onMatched, Action onDutching, Action<string> otherwise)
    {
        if (this == Matched) onMatched();
        else if (this == Dutching) onDutching();
        else otherwise(Value);
    }
}
