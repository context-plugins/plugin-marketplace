using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event ResponseCreated = new("response.created");

    public static readonly Event ResponseUpdated = new("response.updated");

    public static readonly Event DraftAbandoned = new("draft.abandoned");

    public TResult Match<TResult>(Func<TResult> onResponseCreated,
        Func<TResult> onResponseUpdated,
        Func<TResult> onDraftAbandoned,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ResponseCreated => onResponseCreated(),
            _ when this == ResponseUpdated => onResponseUpdated(),
            _ when this == DraftAbandoned => onDraftAbandoned(),
            _ => otherwise(Value)
        };

    public void Match(Action onResponseCreated,
        Action onResponseUpdated,
        Action onDraftAbandoned,
        Action<string> otherwise)
    {
        if (this == ResponseCreated) onResponseCreated();
        else if (this == ResponseUpdated) onResponseUpdated();
        else if (this == DraftAbandoned) onDraftAbandoned();
        else otherwise(Value);
    }
}
