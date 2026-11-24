using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// Required initial monitor status. Accepts ACTIVE or DRAFT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1PerigonMonitorsApi>))]
public sealed record Status1PerigonMonitorsApi : OpenStringEnum<Status1PerigonMonitorsApi>
{
    private Status1PerigonMonitorsApi(string value) : base(value)
    {
    }

    public static readonly Status1PerigonMonitorsApi Active = new("ACTIVE");

    public static readonly Status1PerigonMonitorsApi Draft = new("DRAFT");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDraft, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Draft => onDraft(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDraft, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Draft) onDraft();
        else otherwise(Value);
    }
}
