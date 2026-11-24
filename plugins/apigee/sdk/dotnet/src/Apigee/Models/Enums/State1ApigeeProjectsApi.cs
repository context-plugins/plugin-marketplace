using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The current lifecycle state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1ApigeeProjectsApi>))]
public sealed record State1ApigeeProjectsApi : OpenStringEnum<State1ApigeeProjectsApi>
{
    private State1ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly State1ApigeeProjectsApi StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State1ApigeeProjectsApi SpecApiRegistered = new("SPEC_API_REGISTERED");

    public static readonly State1ApigeeProjectsApi SpecGenerated = new("SPEC_GENERATED");

    public static readonly State1ApigeeProjectsApi SpecAssociated = new("SPEC_ASSOCIATED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onSpecApiRegistered,
        Func<TResult> onSpecGenerated,
        Func<TResult> onSpecAssociated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == SpecApiRegistered => onSpecApiRegistered(),
            _ when this == SpecGenerated => onSpecGenerated(),
            _ when this == SpecAssociated => onSpecAssociated(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onSpecApiRegistered,
        Action onSpecGenerated,
        Action onSpecAssociated,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == SpecApiRegistered) onSpecApiRegistered();
        else if (this == SpecGenerated) onSpecGenerated();
        else if (this == SpecAssociated) onSpecAssociated();
        else otherwise(Value);
    }
}
