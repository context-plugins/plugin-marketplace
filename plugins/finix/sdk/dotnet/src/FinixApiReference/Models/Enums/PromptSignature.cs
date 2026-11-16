using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// When to prompt for a signature.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PromptSignature>))]
public sealed record PromptSignature : OpenStringEnum<PromptSignature>
{
    private PromptSignature(string value) : base(value)
    {
    }

    public static readonly PromptSignature Always = new("ALWAYS");

    public TResult Match<TResult>(Func<TResult> onAlways, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Always => onAlways(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlways, Action<string> otherwise)
    {
        if (this == Always) onAlways();
        else otherwise(Value);
    }
}
