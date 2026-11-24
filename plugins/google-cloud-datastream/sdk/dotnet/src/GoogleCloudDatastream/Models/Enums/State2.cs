using System;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Enum;

namespace GoogleCloudDatastream.Models.Enums;

/// <summary>
/// Output only. The state of the Private Connection.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State2>))]
public sealed record State2 : OpenStringEnum<State2>
{
    private State2(string value) : base(value)
    {
    }

    public static readonly State2 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State2 Creating = new("CREATING");

    public static readonly State2 Created = new("CREATED");

    public static readonly State2 Failed = new("FAILED");

    public static readonly State2 Deleting = new("DELETING");

    public static readonly State2 FailedToDelete = new("FAILED_TO_DELETE");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onCreating,
        Func<TResult> onCreated,
        Func<TResult> onFailed,
        Func<TResult> onDeleting,
        Func<TResult> onFailedToDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Creating => onCreating(),
            _ when this == Created => onCreated(),
            _ when this == Failed => onFailed(),
            _ when this == Deleting => onDeleting(),
            _ when this == FailedToDelete => onFailedToDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onCreating,
        Action onCreated,
        Action onFailed,
        Action onDeleting,
        Action onFailedToDelete,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Creating) onCreating();
        else if (this == Created) onCreated();
        else if (this == Failed) onFailed();
        else if (this == Deleting) onDeleting();
        else if (this == FailedToDelete) onFailedToDelete();
        else otherwise(Value);
    }
}
