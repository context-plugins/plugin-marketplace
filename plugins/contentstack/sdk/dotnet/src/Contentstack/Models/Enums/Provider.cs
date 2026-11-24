using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Name of the LLM provider.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Provider>))]
public sealed record Provider : OpenStringEnum<Provider>
{
    private Provider(string value) : base(value)
    {
    }

    public static readonly Provider Openai = new("openai");

    public static readonly Provider Anthropic = new("anthropic");

    public static readonly Provider AzureOpenai = new("azure_openai");

    public TResult Match<TResult>(Func<TResult> onOpenai,
        Func<TResult> onAnthropic,
        Func<TResult> onAzureOpenai,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Openai => onOpenai(),
            _ when this == Anthropic => onAnthropic(),
            _ when this == AzureOpenai => onAzureOpenai(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpenai, Action onAnthropic, Action onAzureOpenai, Action<string> otherwise)
    {
        if (this == Openai) onOpenai();
        else if (this == Anthropic) onAnthropic();
        else if (this == AzureOpenai) onAzureOpenai();
        else otherwise(Value);
    }
}
