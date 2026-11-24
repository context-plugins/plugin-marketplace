using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// Specifies whether automatic retraining should be attempted for the versions of the project. Automatic retraining is done as a best effort. Required argument for Content Moderation. Applicable only to adapters.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AutoUpdate>))]
public sealed record AutoUpdate : OpenStringEnum<AutoUpdate>
{
    private AutoUpdate(string value) : base(value)
    {
    }

    public static readonly AutoUpdate Enabled = new("ENABLED");

    public static readonly AutoUpdate Disabled = new("DISABLED");

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
