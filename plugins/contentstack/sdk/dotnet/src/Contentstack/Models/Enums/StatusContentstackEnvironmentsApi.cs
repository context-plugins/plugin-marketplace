using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Current status of the environment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusContentstackEnvironmentsApi>))]
public sealed record StatusContentstackEnvironmentsApi : OpenStringEnum<StatusContentstackEnvironmentsApi>
{
    private StatusContentstackEnvironmentsApi(string value) : base(value)
    {
    }

    public static readonly StatusContentstackEnvironmentsApi Active = new("active");

    public static readonly StatusContentstackEnvironmentsApi Inactive = new("inactive");

    public static readonly StatusContentstackEnvironmentsApi Deploying = new("deploying");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onDeploying,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == Deploying => onDeploying(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onInactive, Action onDeploying, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == Deploying) onDeploying();
        else otherwise(Value);
    }
}
