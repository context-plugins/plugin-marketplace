using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The attribute by which to sort the generation request information. You can sort by the following attributes. creationStartTime – The time at which the generation request was created. lastUpdatedTime – The time at which the generation request was last updated.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Attribute1>))]
public sealed record Attribute1 : OpenStringEnum<Attribute1>
{
    private Attribute1(string value) : base(value)
    {
    }

    public static readonly Attribute1 CreationStartTime = new("creationStartTime");

    public static readonly Attribute1 LastUpdatedTime = new("lastUpdatedTime");

    public TResult Match<TResult>(Func<TResult> onCreationStartTime,
        Func<TResult> onLastUpdatedTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CreationStartTime => onCreationStartTime(),
            _ when this == LastUpdatedTime => onLastUpdatedTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreationStartTime, Action onLastUpdatedTime, Action<string> otherwise)
    {
        if (this == CreationStartTime) onCreationStartTime();
        else if (this == LastUpdatedTime) onLastUpdatedTime();
        else otherwise(Value);
    }
}
