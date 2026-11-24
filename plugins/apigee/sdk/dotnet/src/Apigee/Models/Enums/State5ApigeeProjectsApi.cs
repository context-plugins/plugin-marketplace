using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. State of the dependency.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State5ApigeeProjectsApi>))]
public sealed record State5ApigeeProjectsApi : OpenStringEnum<State5ApigeeProjectsApi>
{
    private State5ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly State5ApigeeProjectsApi StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State5ApigeeProjectsApi Proposed = new("PROPOSED");

    public static readonly State5ApigeeProjectsApi Validated = new("VALIDATED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onProposed,
        Func<TResult> onValidated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Proposed => onProposed(),
            _ when this == Validated => onValidated(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified, Action onProposed, Action onValidated, Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Proposed) onProposed();
        else if (this == Validated) onValidated();
        else otherwise(Value);
    }
}
