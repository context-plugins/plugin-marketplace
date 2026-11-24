using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// The underlying LLM model to use for generation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Model>))]
public sealed record Model : OpenStringEnum<Model>
{
    private Model(string value) : base(value)
    {
    }

    public static readonly Model Gpt54Mini = new("gpt-5.4-mini");

    public static readonly Model Gpt54Nano = new("gpt-5.4-nano");

    public static readonly Model Gpt5Mini = new("gpt-5-mini");

    public static readonly Model Gpt5Nano = new("gpt-5-nano");

    public static readonly Model Gpt4O = new("gpt-4o");

    public static readonly Model Gpt4OMini = new("gpt-4o-mini");

    public static readonly Model Gpt41 = new("gpt-4.1");

    public static readonly Model Gpt41Mini = new("gpt-4.1-mini");

    public static readonly Model OpenaiGptOss120B = new("openai/gpt-oss-120b");

    public TResult Match<TResult>(Func<TResult> onGpt54Mini,
        Func<TResult> onGpt54Nano,
        Func<TResult> onGpt5Mini,
        Func<TResult> onGpt5Nano,
        Func<TResult> onGpt4O,
        Func<TResult> onGpt4OMini,
        Func<TResult> onGpt41,
        Func<TResult> onGpt41Mini,
        Func<TResult> onOpenaiGptOss120B,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Gpt54Mini => onGpt54Mini(),
            _ when this == Gpt54Nano => onGpt54Nano(),
            _ when this == Gpt5Mini => onGpt5Mini(),
            _ when this == Gpt5Nano => onGpt5Nano(),
            _ when this == Gpt4O => onGpt4O(),
            _ when this == Gpt4OMini => onGpt4OMini(),
            _ when this == Gpt41 => onGpt41(),
            _ when this == Gpt41Mini => onGpt41Mini(),
            _ when this == OpenaiGptOss120B => onOpenaiGptOss120B(),
            _ => otherwise(Value)
        };

    public void Match(Action onGpt54Mini,
        Action onGpt54Nano,
        Action onGpt5Mini,
        Action onGpt5Nano,
        Action onGpt4O,
        Action onGpt4OMini,
        Action onGpt41,
        Action onGpt41Mini,
        Action onOpenaiGptOss120B,
        Action<string> otherwise)
    {
        if (this == Gpt54Mini) onGpt54Mini();
        else if (this == Gpt54Nano) onGpt54Nano();
        else if (this == Gpt5Mini) onGpt5Mini();
        else if (this == Gpt5Nano) onGpt5Nano();
        else if (this == Gpt4O) onGpt4O();
        else if (this == Gpt4OMini) onGpt4OMini();
        else if (this == Gpt41) onGpt41();
        else if (this == Gpt41Mini) onGpt41Mini();
        else if (this == OpenaiGptOss120B) onOpenaiGptOss120B();
        else otherwise(Value);
    }
}
