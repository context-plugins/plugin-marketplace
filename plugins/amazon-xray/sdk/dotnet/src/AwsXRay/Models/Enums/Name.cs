using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The name of a sampling rule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name>))]
public sealed record Name : OpenStringEnum<Name>
{
    private Name(string value) : base(value)
    {
    }

    public static readonly Name PartialScan = new("PartialScan");

    public static readonly Name FixedRate = new("FixedRate");

    public TResult Match<TResult>(Func<TResult> onPartialScan,
        Func<TResult> onFixedRate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PartialScan => onPartialScan(),
            _ when this == FixedRate => onFixedRate(),
            _ => otherwise(Value)
        };

    public void Match(Action onPartialScan, Action onFixedRate, Action<string> otherwise)
    {
        if (this == PartialScan) onPartialScan();
        else if (this == FixedRate) onFixedRate();
        else otherwise(Value);
    }
}
