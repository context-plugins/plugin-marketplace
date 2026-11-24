using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ContentClassifier>))]
public sealed record ContentClassifier : OpenStringEnum<ContentClassifier>
{
    private ContentClassifier(string value) : base(value)
    {
    }

    public static readonly ContentClassifier FreeOfPersonallyIdentifiableInformation = new(
        "FreeOfPersonallyIdentifiableInformation");

    public static readonly ContentClassifier FreeOfAdultContent = new("FreeOfAdultContent");

    public TResult Match<TResult>(Func<TResult> onFreeOfPersonallyIdentifiableInformation,
        Func<TResult> onFreeOfAdultContent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FreeOfPersonallyIdentifiableInformation => onFreeOfPersonallyIdentifiableInformation(),
            _ when this == FreeOfAdultContent => onFreeOfAdultContent(),
            _ => otherwise(Value)
        };

    public void Match(Action onFreeOfPersonallyIdentifiableInformation,
        Action onFreeOfAdultContent,
        Action<string> otherwise)
    {
        if (this == FreeOfPersonallyIdentifiableInformation) onFreeOfPersonallyIdentifiableInformation();
        else if (this == FreeOfAdultContent) onFreeOfAdultContent();
        else otherwise(Value);
    }
}
