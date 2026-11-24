using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Describes the type of requested change to a feature.
/// example: 'featureUpdate'
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Operation>))]
public sealed record Operation : OpenStringEnum<Operation>
{
    private Operation(string value) : base(value)
    {
    }

    public static readonly Operation FeatureUpdate = new("featureUpdate");

    public static readonly Operation FeatureStatusUpdate = new("featureStatusUpdate");

    public static readonly Operation FeatureStaticConfigurationUpdate = new("featureStaticConfigurationUpdate");

    public TResult Match<TResult>(Func<TResult> onFeatureUpdate,
        Func<TResult> onFeatureStatusUpdate,
        Func<TResult> onFeatureStaticConfigurationUpdate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FeatureUpdate => onFeatureUpdate(),
            _ when this == FeatureStatusUpdate => onFeatureStatusUpdate(),
            _ when this == FeatureStaticConfigurationUpdate => onFeatureStaticConfigurationUpdate(),
            _ => otherwise(Value)
        };

    public void Match(Action onFeatureUpdate,
        Action onFeatureStatusUpdate,
        Action onFeatureStaticConfigurationUpdate,
        Action<string> otherwise)
    {
        if (this == FeatureUpdate) onFeatureUpdate();
        else if (this == FeatureStatusUpdate) onFeatureStatusUpdate();
        else if (this == FeatureStaticConfigurationUpdate) onFeatureStaticConfigurationUpdate();
        else otherwise(Value);
    }
}
