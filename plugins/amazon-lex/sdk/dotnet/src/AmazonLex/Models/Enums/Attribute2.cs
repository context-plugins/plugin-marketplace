using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The attribute to use to sort the list of intents.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Attribute2>))]
public sealed record Attribute2 : OpenStringEnum<Attribute2>
{
    private Attribute2(string value) : base(value)
    {
    }

    public static readonly Attribute2 IntentName = new("IntentName");

    public static readonly Attribute2 LastUpdatedDateTime = new("LastUpdatedDateTime");

    public TResult Match<TResult>(Func<TResult> onIntentName,
        Func<TResult> onLastUpdatedDateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IntentName => onIntentName(),
            _ when this == LastUpdatedDateTime => onLastUpdatedDateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onIntentName, Action onLastUpdatedDateTime, Action<string> otherwise)
    {
        if (this == IntentName) onIntentName();
        else if (this == LastUpdatedDateTime) onLastUpdatedDateTime();
        else otherwise(Value);
    }
}
