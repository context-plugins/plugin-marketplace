using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Indicates if the user archived this incident.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Observability>))]
public sealed record Observability : OpenStringEnum<Observability>
{
    private Observability(string value) : base(value)
    {
    }

    public static readonly Observability ObservabilityUnspecified = new("OBSERVABILITY_UNSPECIFIED");

    public static readonly Observability Active = new("ACTIVE");

    public static readonly Observability Archived = new("ARCHIVED");

    public TResult Match<TResult>(Func<TResult> onObservabilityUnspecified,
        Func<TResult> onActive,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ObservabilityUnspecified => onObservabilityUnspecified(),
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onObservabilityUnspecified, Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == ObservabilityUnspecified) onObservabilityUnspecified();
        else if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
