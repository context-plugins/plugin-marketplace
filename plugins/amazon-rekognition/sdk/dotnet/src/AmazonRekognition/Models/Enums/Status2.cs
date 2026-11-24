using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The current status of the project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Creating = new("CREATING");

    public static readonly Status2 Created = new("CREATED");

    public static readonly Status2 Deleting = new("DELETING");

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
