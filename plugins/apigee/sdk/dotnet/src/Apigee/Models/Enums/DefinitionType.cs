using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The definition type of the attribute.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DefinitionType>))]
public sealed record DefinitionType : OpenStringEnum<DefinitionType>
{
    private DefinitionType(string value) : base(value)
    {
    }

    public static readonly DefinitionType DefinitionTypeUnspecified = new("DEFINITION_TYPE_UNSPECIFIED");

    public static readonly DefinitionType SystemDefined = new("SYSTEM_DEFINED");

    public static readonly DefinitionType UserDefined = new("USER_DEFINED");

    public TResult Match<TResult>(Func<TResult> onDefinitionTypeUnspecified,
        Func<TResult> onSystemDefined,
        Func<TResult> onUserDefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DefinitionTypeUnspecified => onDefinitionTypeUnspecified(),
            _ when this == SystemDefined => onSystemDefined(),
            _ when this == UserDefined => onUserDefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefinitionTypeUnspecified,
        Action onSystemDefined,
        Action onUserDefined,
        Action<string> otherwise)
    {
        if (this == DefinitionTypeUnspecified) onDefinitionTypeUnspecified();
        else if (this == SystemDefined) onSystemDefined();
        else if (this == UserDefined) onUserDefined();
        else otherwise(Value);
    }
}
