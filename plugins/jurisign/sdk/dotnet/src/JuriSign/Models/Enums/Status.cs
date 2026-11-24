using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Draft = new("draft");

    public static readonly Status Processing = new("processing");

    public static readonly Status Sending = new("sending");

    public static readonly Status Completed = new("completed");

    public static readonly Status PartiallySent = new("partially_sent");

    public static readonly Status Failed = new("failed");

    public static readonly Status Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onProcessing,
        Func<TResult> onSending,
        Func<TResult> onCompleted,
        Func<TResult> onPartiallySent,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Processing => onProcessing(),
            _ when this == Sending => onSending(),
            _ when this == Completed => onCompleted(),
            _ when this == PartiallySent => onPartiallySent(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onProcessing,
        Action onSending,
        Action onCompleted,
        Action onPartiallySent,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Processing) onProcessing();
        else if (this == Sending) onSending();
        else if (this == Completed) onCompleted();
        else if (this == PartiallySent) onPartiallySent();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
