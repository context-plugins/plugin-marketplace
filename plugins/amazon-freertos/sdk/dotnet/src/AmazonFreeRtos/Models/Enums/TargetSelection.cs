using System;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Enum;

namespace AmazonFreeRtos.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TargetSelection>))]
public sealed record TargetSelection : OpenStringEnum<TargetSelection>
{
    private TargetSelection(string value) : base(value)
    {
    }

    public static readonly TargetSelection Continuous = new("CONTINUOUS");

    public static readonly TargetSelection Snapshot = new("SNAPSHOT");

    public TResult Match<TResult>(Func<TResult> onContinuous,
        Func<TResult> onSnapshot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Continuous => onContinuous(),
            _ when this == Snapshot => onSnapshot(),
            _ => otherwise(Value)
        };

    public void Match(Action onContinuous, Action onSnapshot, Action<string> otherwise)
    {
        if (this == Continuous) onContinuous();
        else if (this == Snapshot) onSnapshot();
        else otherwise(Value);
    }
}
