using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The permission status of a resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ResourcePermission>))]
public sealed record ResourcePermission : OpenStringEnum<ResourcePermission>
{
    private ResourcePermission(string value) : base(value)
    {
    }

    public static readonly ResourcePermission FullPermission = new("FULL_PERMISSION");

    public static readonly ResourcePermission MissingPermission = new("MISSING_PERMISSION");

    public TResult Match<TResult>(Func<TResult> onFullPermission,
        Func<TResult> onMissingPermission,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FullPermission => onFullPermission(),
            _ when this == MissingPermission => onMissingPermission(),
            _ => otherwise(Value)
        };

    public void Match(Action onFullPermission, Action onMissingPermission, Action<string> otherwise)
    {
        if (this == FullPermission) onFullPermission();
        else if (this == MissingPermission) onMissingPermission();
        else otherwise(Value);
    }
}
