using System;
using System.Text.Json.Serialization;
using AmazonEbs.Core.Enum;

namespace AmazonEbs.Models.Enums;

/// <summary>
/// Reserved for future use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SseType>))]
public sealed record SseType : OpenStringEnum<SseType>
{
    private SseType(string value) : base(value)
    {
    }

    public static readonly SseType SseEbs = new("sse-ebs");

    public static readonly SseType SseKms = new("sse-kms");

    public static readonly SseType None = new("none");

    public TResult Match<TResult>(Func<TResult> onSseEbs,
        Func<TResult> onSseKms,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SseEbs => onSseEbs(),
            _ when this == SseKms => onSseKms(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onSseEbs, Action onSseKms, Action onNone, Action<string> otherwise)
    {
        if (this == SseEbs) onSseEbs();
        else if (this == SseKms) onSseKms();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
