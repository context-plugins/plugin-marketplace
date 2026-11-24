using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination of the new and old settings.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Updating = new("UPDATING");

    public static readonly Status Active = new("ACTIVE");

    public TResult Match<TResult>(Func<TResult> onUpdating, Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Updating => onUpdating(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpdating, Action onActive, Action<string> otherwise)
    {
        if (this == Updating) onUpdating();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
