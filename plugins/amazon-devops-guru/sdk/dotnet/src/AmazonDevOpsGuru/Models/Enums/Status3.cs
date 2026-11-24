using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The status of the reactive anomaly.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Ongoing = new("ONGOING");

    public static readonly Status3 Closed = new("CLOSED");

    public TResult Match<TResult>(Func<TResult> onOngoing, Func<TResult> onClosed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ongoing => onOngoing(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onOngoing, Action onClosed, Action<string> otherwise)
    {
        if (this == Ongoing) onOngoing();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
