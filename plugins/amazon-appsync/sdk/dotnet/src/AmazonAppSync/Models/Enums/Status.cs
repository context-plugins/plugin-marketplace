using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The cache instance status. AVAILABLE: The instance is available for use. CREATING: The instance is currently creating. DELETING: The instance is currently deleting. MODIFYING: The instance is currently modifying. FAILED: The instance has failed creation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Available = new("AVAILABLE");

    public static readonly Status Creating = new("CREATING");

    public static readonly Status Deleting = new("DELETING");

    public static readonly Status Modifying = new("MODIFYING");

    public static readonly Status Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onAvailable,
        Func<TResult> onCreating,
        Func<TResult> onDeleting,
        Func<TResult> onModifying,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Available => onAvailable(),
            _ when this == Creating => onCreating(),
            _ when this == Deleting => onDeleting(),
            _ when this == Modifying => onModifying(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAvailable,
        Action onCreating,
        Action onDeleting,
        Action onModifying,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Available) onAvailable();
        else if (this == Creating) onCreating();
        else if (this == Deleting) onDeleting();
        else if (this == Modifying) onModifying();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
