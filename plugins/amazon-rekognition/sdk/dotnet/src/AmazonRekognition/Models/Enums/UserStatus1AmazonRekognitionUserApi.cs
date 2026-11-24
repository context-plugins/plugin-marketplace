using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The status of the user matched to a provided FaceID.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UserStatus1AmazonRekognitionUserApi>))]
public sealed record UserStatus1AmazonRekognitionUserApi : OpenStringEnum<UserStatus1AmazonRekognitionUserApi>
{
    private UserStatus1AmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly UserStatus1AmazonRekognitionUserApi Active = new("ACTIVE");

    public static readonly UserStatus1AmazonRekognitionUserApi Updating = new("UPDATING");

    public static readonly UserStatus1AmazonRekognitionUserApi Creating = new("CREATING");

    public static readonly UserStatus1AmazonRekognitionUserApi Created = new("CREATED");

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
