using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The status of the proactive insight.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Ongoing = new("ONGOING");

    public static readonly Status2 Closed = new("CLOSED");

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
