using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The classification of the discovered API operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Classification>))]
public sealed record Classification : OpenStringEnum<Classification>
{
    private Classification(string value) : base(value)
    {
    }

    public static readonly Classification ClassificationUnspecified = new("CLASSIFICATION_UNSPECIFIED");

    public static readonly Classification Known = new("KNOWN");

    public static readonly Classification Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onClassificationUnspecified,
        Func<TResult> onKnown,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClassificationUnspecified => onClassificationUnspecified(),
            _ when this == Known => onKnown(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onClassificationUnspecified, Action onKnown, Action onUnknown, Action<string> otherwise)
    {
        if (this == ClassificationUnspecified) onClassificationUnspecified();
        else if (this == Known) onKnown();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
