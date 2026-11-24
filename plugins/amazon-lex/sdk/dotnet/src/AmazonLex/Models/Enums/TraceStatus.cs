using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The Bedrock trace status in the Bedrock model specification details.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TraceStatus>))]
public sealed record TraceStatus : OpenStringEnum<TraceStatus>
{
    private TraceStatus(string value) : base(value)
    {
    }

    public static readonly TraceStatus Enabled = new("ENABLED");

    public static readonly TraceStatus Disabled = new("DISABLED");

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
