using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Specifies the status of the endpoint being returned. Possible values are: Creating, Ready, Updating, Deleting, Failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status8>))]
public sealed record Status8 : OpenStringEnum<Status8>
{
    private Status8(string value) : base(value)
    {
    }

    public static readonly Status8 Creating = new("CREATING");

    public static readonly Status8 Deleting = new("DELETING");

    public static readonly Status8 Failed = new("FAILED");

    public static readonly Status8 InService = new("IN_SERVICE");

    public static readonly Status8 Updating = new("UPDATING");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onDeleting,
        Func<TResult> onFailed,
        Func<TResult> onInService,
        Func<TResult> onUpdating,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Deleting => onDeleting(),
            _ when this == Failed => onFailed(),
            _ when this == InService => onInService(),
            _ when this == Updating => onUpdating(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating,
        Action onDeleting,
        Action onFailed,
        Action onInService,
        Action onUpdating,
        Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Deleting) onDeleting();
        else if (this == Failed) onFailed();
        else if (this == InService) onInService();
        else if (this == Updating) onUpdating();
        else otherwise(Value);
    }
}
