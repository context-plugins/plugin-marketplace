using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Indicates whether automatic retraining will be attempted for the versions of the project. Applies only to adapters.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AutoUpdate1>))]
public sealed record AutoUpdate1 : OpenStringEnum<AutoUpdate1>
{
    private AutoUpdate1(string value) : base(value)
    {
    }

    public static readonly AutoUpdate1 Enabled = new("ENABLED");

    public static readonly AutoUpdate1 Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onEnabled, Func<TResult> onDisabled, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Enabled => onEnabled(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnabled, Action onDisabled, Action<string> otherwise)
    {
        if (this == Enabled) onEnabled();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
