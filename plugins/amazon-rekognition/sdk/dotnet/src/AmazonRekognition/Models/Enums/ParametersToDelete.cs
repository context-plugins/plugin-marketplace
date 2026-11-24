using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ParametersToDelete>))]
public sealed record ParametersToDelete : OpenStringEnum<ParametersToDelete>
{
    private ParametersToDelete(string value) : base(value)
    {
    }

    public static readonly ParametersToDelete ConnectedHomeMinConfidence = new("ConnectedHomeMinConfidence");

    public static readonly ParametersToDelete RegionsOfInterest = new("RegionsOfInterest");

    public TResult Match<TResult>(Func<TResult> onConnectedHomeMinConfidence,
        Func<TResult> onRegionsOfInterest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConnectedHomeMinConfidence => onConnectedHomeMinConfidence(),
            _ when this == RegionsOfInterest => onRegionsOfInterest(),
            _ => otherwise(Value)
        };

    public void Match(Action onConnectedHomeMinConfidence, Action onRegionsOfInterest, Action<string> otherwise)
    {
        if (this == ConnectedHomeMinConfidence) onConnectedHomeMinConfidence();
        else if (this == RegionsOfInterest) onRegionsOfInterest();
        else otherwise(Value);
    }
}
