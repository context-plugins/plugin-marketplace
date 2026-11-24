using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Document Scan status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScanStatus>))]
public sealed record ScanStatus : OpenStringEnum<ScanStatus>
{
    private ScanStatus(string value) : base(value)
    {
    }

    public static readonly ScanStatus NotScanned = new("NOT_SCANNED");

    public static readonly ScanStatus Clean = new("CLEAN");

    public static readonly ScanStatus Infected = new("INFECTED");

    public static readonly ScanStatus InQueue = new("IN_QUEUE");

    public static readonly ScanStatus Rejected = new("REJECTED");

    public static readonly ScanStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onNotScanned,
        Func<TResult> onClean,
        Func<TResult> onInfected,
        Func<TResult> onInQueue,
        Func<TResult> onRejected,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotScanned => onNotScanned(),
            _ when this == Clean => onClean(),
            _ when this == Infected => onInfected(),
            _ when this == InQueue => onInQueue(),
            _ when this == Rejected => onRejected(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotScanned,
        Action onClean,
        Action onInfected,
        Action onInQueue,
        Action onRejected,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == NotScanned) onNotScanned();
        else if (this == Clean) onClean();
        else if (this == Infected) onInfected();
        else if (this == InQueue) onInQueue();
        else if (this == Rejected) onRejected();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
