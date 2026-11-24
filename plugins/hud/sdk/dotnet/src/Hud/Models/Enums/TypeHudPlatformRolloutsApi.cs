using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeHudPlatformRolloutsApi>))]
public sealed record TypeHudPlatformRolloutsApi : OpenStringEnum<TypeHudPlatformRolloutsApi>
{
    private TypeHudPlatformRolloutsApi(string value) : base(value)
    {
    }

    public static readonly TypeHudPlatformRolloutsApi Claude = new("claude");

    public static readonly TypeHudPlatformRolloutsApi ClaudeCli = new("claude_cli");

    public static readonly TypeHudPlatformRolloutsApi CodexCli = new("codex_cli");

    public static readonly TypeHudPlatformRolloutsApi Openai = new("openai");

    public static readonly TypeHudPlatformRolloutsApi Gemini = new("gemini");

    public static readonly TypeHudPlatformRolloutsApi OpenaiCompatible = new("openai_compatible");

    public TResult Match<TResult>(Func<TResult> onClaude,
        Func<TResult> onClaudeCli,
        Func<TResult> onCodexCli,
        Func<TResult> onOpenai,
        Func<TResult> onGemini,
        Func<TResult> onOpenaiCompatible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Claude => onClaude(),
            _ when this == ClaudeCli => onClaudeCli(),
            _ when this == CodexCli => onCodexCli(),
            _ when this == Openai => onOpenai(),
            _ when this == Gemini => onGemini(),
            _ when this == OpenaiCompatible => onOpenaiCompatible(),
            _ => otherwise(Value)
        };

    public void Match(Action onClaude,
        Action onClaudeCli,
        Action onCodexCli,
        Action onOpenai,
        Action onGemini,
        Action onOpenaiCompatible,
        Action<string> otherwise)
    {
        if (this == Claude) onClaude();
        else if (this == ClaudeCli) onClaudeCli();
        else if (this == CodexCli) onCodexCli();
        else if (this == Openai) onOpenai();
        else if (this == Gemini) onGemini();
        else if (this == OpenaiCompatible) onOpenaiCompatible();
        else otherwise(Value);
    }
}
