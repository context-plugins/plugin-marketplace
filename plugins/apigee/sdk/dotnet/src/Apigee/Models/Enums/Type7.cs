using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. EnvironmentType selected for the environment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type7>))]
public sealed record Type7 : OpenStringEnum<Type7>
{
    private Type7(string value) : base(value)
    {
    }

    public static readonly Type7 EnvironmentTypeUnspecified = new("ENVIRONMENT_TYPE_UNSPECIFIED");

    public static readonly Type7 Base = new("BASE");

    public static readonly Type7 Intermediate = new("INTERMEDIATE");

    public static readonly Type7 Comprehensive = new("COMPREHENSIVE");

    public TResult Match<TResult>(Func<TResult> onEnvironmentTypeUnspecified,
        Func<TResult> onBase,
        Func<TResult> onIntermediate,
        Func<TResult> onComprehensive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EnvironmentTypeUnspecified => onEnvironmentTypeUnspecified(),
            _ when this == Base => onBase(),
            _ when this == Intermediate => onIntermediate(),
            _ when this == Comprehensive => onComprehensive(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnvironmentTypeUnspecified,
        Action onBase,
        Action onIntermediate,
        Action onComprehensive,
        Action<string> otherwise)
    {
        if (this == EnvironmentTypeUnspecified) onEnvironmentTypeUnspecified();
        else if (this == Base) onBase();
        else if (this == Intermediate) onIntermediate();
        else if (this == Comprehensive) onComprehensive();
        else otherwise(Value);
    }
}
