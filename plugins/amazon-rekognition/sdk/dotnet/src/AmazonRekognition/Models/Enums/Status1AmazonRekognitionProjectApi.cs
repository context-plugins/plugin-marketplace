using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The current status of the delete project operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1AmazonRekognitionProjectApi>))]
public sealed record Status1AmazonRekognitionProjectApi : OpenStringEnum<Status1AmazonRekognitionProjectApi>
{
    private Status1AmazonRekognitionProjectApi(string value) : base(value)
    {
    }

    public static readonly Status1AmazonRekognitionProjectApi Creating = new("CREATING");

    public static readonly Status1AmazonRekognitionProjectApi Created = new("CREATED");

    public static readonly Status1AmazonRekognitionProjectApi Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onCreated,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Created => onCreated(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating, Action onCreated, Action onDeleting, Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Created) onCreated();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
