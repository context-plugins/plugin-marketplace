using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

/// <summary>
/// bu-ultrafast and bu-fast are early-access ultrafast presets; they take no modelParams and are rejected for projects without access.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Model>))]
public sealed record Model : OpenStringEnum<Model>
{
    private Model(string value) : base(value)
    {
    }

    public static readonly Model MimoV26Pro = new("mimo-v2.6-pro");

    public static readonly Model MimoV26Flash = new("mimo-v2.6-flash");

    public static readonly Model DeepseekV41Flash = new("deepseek-v4.1-flash");

    public static readonly Model Glm52 = new("glm-5.2");

    public static readonly Model Grok45 = new("grok-4.5");

    public static readonly Model Grok46 = new("grok-4.6");

    public static readonly Model Glm53Flash = new("glm-5.3-flash");

    public static readonly Model DeepseekV4FlashVision = new("deepseek-v4-flash-vision");

    public static readonly Model KimiK3 = new("kimi-k3");

    public static readonly Model MinimaxM3 = new("minimax-m3");

    public static readonly Model ClaudeOpus47 = new("claude-opus-4.7");

    public static readonly Model ClaudeOpus48 = new("claude-opus-4.8");

    public static readonly Model ClaudeOpus5 = new("claude-opus-5");

    public static readonly Model ClaudeOpus55 = new("claude-opus-5-5");

    public static readonly Model ClaudeFable5 = new("claude-fable-5");

    public static readonly Model ClaudeSonnet5 = new("claude-sonnet-5");

    public static readonly Model ClaudeSonnet55 = new("claude-sonnet-5-5");

    public static readonly Model Gpt55 = new("gpt-5.5");

    public static readonly Model Gpt56 = new("gpt-5.6");

    public static readonly Model Gpt6Astra = new("gpt-6-astra");

    public static readonly Model Gpt6Sol = new("gpt-6-sol");

    public static readonly Model Gpt61Sol = new("gpt-6.1-sol");

    public static readonly Model Gpt6Luna = new("gpt-6-luna");

    public static readonly Model Gpt56Sol = new("gpt-5.6-sol");

    public static readonly Model Gpt56Terra = new("gpt-5.6-terra");

    public static readonly Model Gpt56Luna = new("gpt-5.6-luna");

    public static readonly Model Gemini36Flash = new("gemini-3.6-flash");

    public static readonly Model Gemini35Flash = new("gemini-3.5-flash");

    public static readonly Model Gemini31Pro = new("gemini-3.1-pro");

    public static readonly Model Gemini3Flash = new("gemini-3-flash");

    public static readonly Model BuUltrafast = new("bu-ultrafast");

    public static readonly Model BuFast = new("bu-fast");

    public TResult Match<TResult>(Func<TResult> onMimoV26Pro,
        Func<TResult> onMimoV26Flash,
        Func<TResult> onDeepseekV41Flash,
        Func<TResult> onGlm52,
        Func<TResult> onGrok45,
        Func<TResult> onGrok46,
        Func<TResult> onGlm53Flash,
        Func<TResult> onDeepseekV4FlashVision,
        Func<TResult> onKimiK3,
        Func<TResult> onMinimaxM3,
        Func<TResult> onClaudeOpus47,
        Func<TResult> onClaudeOpus48,
        Func<TResult> onClaudeOpus5,
        Func<TResult> onClaudeOpus55,
        Func<TResult> onClaudeFable5,
        Func<TResult> onClaudeSonnet5,
        Func<TResult> onClaudeSonnet55,
        Func<TResult> onGpt55,
        Func<TResult> onGpt56,
        Func<TResult> onGpt6Astra,
        Func<TResult> onGpt6Sol,
        Func<TResult> onGpt61Sol,
        Func<TResult> onGpt6Luna,
        Func<TResult> onGpt56Sol,
        Func<TResult> onGpt56Terra,
        Func<TResult> onGpt56Luna,
        Func<TResult> onGemini36Flash,
        Func<TResult> onGemini35Flash,
        Func<TResult> onGemini31Pro,
        Func<TResult> onGemini3Flash,
        Func<TResult> onBuUltrafast,
        Func<TResult> onBuFast,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MimoV26Pro => onMimoV26Pro(),
            _ when this == MimoV26Flash => onMimoV26Flash(),
            _ when this == DeepseekV41Flash => onDeepseekV41Flash(),
            _ when this == Glm52 => onGlm52(),
            _ when this == Grok45 => onGrok45(),
            _ when this == Grok46 => onGrok46(),
            _ when this == Glm53Flash => onGlm53Flash(),
            _ when this == DeepseekV4FlashVision => onDeepseekV4FlashVision(),
            _ when this == KimiK3 => onKimiK3(),
            _ when this == MinimaxM3 => onMinimaxM3(),
            _ when this == ClaudeOpus47 => onClaudeOpus47(),
            _ when this == ClaudeOpus48 => onClaudeOpus48(),
            _ when this == ClaudeOpus5 => onClaudeOpus5(),
            _ when this == ClaudeOpus55 => onClaudeOpus55(),
            _ when this == ClaudeFable5 => onClaudeFable5(),
            _ when this == ClaudeSonnet5 => onClaudeSonnet5(),
            _ when this == ClaudeSonnet55 => onClaudeSonnet55(),
            _ when this == Gpt55 => onGpt55(),
            _ when this == Gpt56 => onGpt56(),
            _ when this == Gpt6Astra => onGpt6Astra(),
            _ when this == Gpt6Sol => onGpt6Sol(),
            _ when this == Gpt61Sol => onGpt61Sol(),
            _ when this == Gpt6Luna => onGpt6Luna(),
            _ when this == Gpt56Sol => onGpt56Sol(),
            _ when this == Gpt56Terra => onGpt56Terra(),
            _ when this == Gpt56Luna => onGpt56Luna(),
            _ when this == Gemini36Flash => onGemini36Flash(),
            _ when this == Gemini35Flash => onGemini35Flash(),
            _ when this == Gemini31Pro => onGemini31Pro(),
            _ when this == Gemini3Flash => onGemini3Flash(),
            _ when this == BuUltrafast => onBuUltrafast(),
            _ when this == BuFast => onBuFast(),
            _ => otherwise(Value)
        };

    public void Match(Action onMimoV26Pro,
        Action onMimoV26Flash,
        Action onDeepseekV41Flash,
        Action onGlm52,
        Action onGrok45,
        Action onGrok46,
        Action onGlm53Flash,
        Action onDeepseekV4FlashVision,
        Action onKimiK3,
        Action onMinimaxM3,
        Action onClaudeOpus47,
        Action onClaudeOpus48,
        Action onClaudeOpus5,
        Action onClaudeOpus55,
        Action onClaudeFable5,
        Action onClaudeSonnet5,
        Action onClaudeSonnet55,
        Action onGpt55,
        Action onGpt56,
        Action onGpt6Astra,
        Action onGpt6Sol,
        Action onGpt61Sol,
        Action onGpt6Luna,
        Action onGpt56Sol,
        Action onGpt56Terra,
        Action onGpt56Luna,
        Action onGemini36Flash,
        Action onGemini35Flash,
        Action onGemini31Pro,
        Action onGemini3Flash,
        Action onBuUltrafast,
        Action onBuFast,
        Action<string> otherwise)
    {
        if (this == MimoV26Pro) onMimoV26Pro();
        else if (this == MimoV26Flash) onMimoV26Flash();
        else if (this == DeepseekV41Flash) onDeepseekV41Flash();
        else if (this == Glm52) onGlm52();
        else if (this == Grok45) onGrok45();
        else if (this == Grok46) onGrok46();
        else if (this == Glm53Flash) onGlm53Flash();
        else if (this == DeepseekV4FlashVision) onDeepseekV4FlashVision();
        else if (this == KimiK3) onKimiK3();
        else if (this == MinimaxM3) onMinimaxM3();
        else if (this == ClaudeOpus47) onClaudeOpus47();
        else if (this == ClaudeOpus48) onClaudeOpus48();
        else if (this == ClaudeOpus5) onClaudeOpus5();
        else if (this == ClaudeOpus55) onClaudeOpus55();
        else if (this == ClaudeFable5) onClaudeFable5();
        else if (this == ClaudeSonnet5) onClaudeSonnet5();
        else if (this == ClaudeSonnet55) onClaudeSonnet55();
        else if (this == Gpt55) onGpt55();
        else if (this == Gpt56) onGpt56();
        else if (this == Gpt6Astra) onGpt6Astra();
        else if (this == Gpt6Sol) onGpt6Sol();
        else if (this == Gpt61Sol) onGpt61Sol();
        else if (this == Gpt6Luna) onGpt6Luna();
        else if (this == Gpt56Sol) onGpt56Sol();
        else if (this == Gpt56Terra) onGpt56Terra();
        else if (this == Gpt56Luna) onGpt56Luna();
        else if (this == Gemini36Flash) onGemini36Flash();
        else if (this == Gemini35Flash) onGemini35Flash();
        else if (this == Gemini31Pro) onGemini31Pro();
        else if (this == Gemini3Flash) onGemini3Flash();
        else if (this == BuUltrafast) onBuUltrafast();
        else if (this == BuFast) onBuFast();
        else otherwise(Value);
    }
}
