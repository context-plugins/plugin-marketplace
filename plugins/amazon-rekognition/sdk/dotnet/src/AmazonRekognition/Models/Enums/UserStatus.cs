using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The status of an update made to a UserID. Reflects if the UserID has been updated for every requested change.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UserStatus>))]
public sealed record UserStatus : OpenStringEnum<UserStatus>
{
    private UserStatus(string value) : base(value)
    {
    }

    public static readonly UserStatus Active = new("ACTIVE");

    public static readonly UserStatus Updating = new("UPDATING");

    public static readonly UserStatus Creating = new("CREATING");

    public static readonly UserStatus Created = new("CREATED");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onUpdating,
        Func<TResult> onCreating,
        Func<TResult> onCreated,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Updating => onUpdating(),
            _ when this == Creating => onCreating(),
            _ when this == Created => onCreated(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onUpdating, Action onCreating, Action onCreated, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Updating) onUpdating();
        else if (this == Creating) onCreating();
        else if (this == Created) onCreated();
        else otherwise(Value);
    }
}
