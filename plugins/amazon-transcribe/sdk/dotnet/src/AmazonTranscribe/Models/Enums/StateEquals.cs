using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Returns only custom medical vocabularies with the specified state. Custom vocabularies are ordered by creation date, with the newest vocabulary first. If you do not include StateEquals, all custom medical vocabularies are returned.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateEquals>))]
public sealed record StateEquals : OpenStringEnum<StateEquals>
{
    private StateEquals(string value) : base(value)
    {
    }

    public static readonly StateEquals Pending = new("PENDING");

    public static readonly StateEquals Ready = new("READY");

    public static readonly StateEquals Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onReady,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Ready => onReady(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onReady, Action onFailed, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Ready) onReady();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
