using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The type of the definition.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeApigeeProjectsApi>))]
public sealed record TypeApigeeProjectsApi : OpenStringEnum<TypeApigeeProjectsApi>
{
    private TypeApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly TypeApigeeProjectsApi TypeUnspecified = new("TYPE_UNSPECIFIED");

    public static readonly TypeApigeeProjectsApi Schema = new("SCHEMA");

    public TResult Match<TResult>(Func<TResult> onTypeUnspecified,
        Func<TResult> onSchema,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TypeUnspecified => onTypeUnspecified(),
            _ when this == Schema => onSchema(),
            _ => otherwise(Value)
        };

    public void Match(Action onTypeUnspecified, Action onSchema, Action<string> otherwise)
    {
        if (this == TypeUnspecified) onTypeUnspecified();
        else if (this == Schema) onSchema();
        else otherwise(Value);
    }
}
