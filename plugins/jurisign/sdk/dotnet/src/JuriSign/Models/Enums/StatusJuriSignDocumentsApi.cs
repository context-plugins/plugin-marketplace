using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusJuriSignDocumentsApi>))]
public sealed record StatusJuriSignDocumentsApi : OpenStringEnum<StatusJuriSignDocumentsApi>
{
    private StatusJuriSignDocumentsApi(string value) : base(value)
    {
    }

    public static readonly StatusJuriSignDocumentsApi Draft = new("draft");

    public static readonly StatusJuriSignDocumentsApi Pending = new("pending");

    public static readonly StatusJuriSignDocumentsApi Completed = new("completed");

    public static readonly StatusJuriSignDocumentsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onPending,
        Func<TResult> onCompleted,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Pending => onPending(),
            _ when this == Completed => onCompleted(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft,
        Action onPending,
        Action onCompleted,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Pending) onPending();
        else if (this == Completed) onCompleted();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
