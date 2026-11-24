using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Communicates if the UserID has been updated with latest set of faces to be associated with the UserID.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UserStatusAmazonRekognitionUserApi>))]
public sealed record UserStatusAmazonRekognitionUserApi : OpenStringEnum<UserStatusAmazonRekognitionUserApi>
{
    private UserStatusAmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly UserStatusAmazonRekognitionUserApi Active = new("ACTIVE");

    public static readonly UserStatusAmazonRekognitionUserApi Updating = new("UPDATING");

    public static readonly UserStatusAmazonRekognitionUserApi Creating = new("CREATING");

    public static readonly UserStatusAmazonRekognitionUserApi Created = new("CREATED");

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
