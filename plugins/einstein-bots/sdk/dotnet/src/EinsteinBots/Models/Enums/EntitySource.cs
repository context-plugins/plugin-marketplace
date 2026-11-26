using System;
using System.Text.Json.Serialization;
using EinsteinBots.Core.Enum;

namespace EinsteinBots.Models.Enums;

/// <summary>
/// "Prediction system that detects the entity. The Bot API can call NLPs or it can figure out the entity by itself."
/// <list type="bullet">
///   <item><description><c>BOT_SERVICE</c>—Bot detects entity without Natural Language Processing (NLP)</description></item>
///   <item><description><c>CORE_NLP</c>—Third-party NLP</description></item>
///   <item><description><c>EINSTEIN_NLP</c>—Einstein NLP</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EntitySource>))]
public sealed record EntitySource : OpenStringEnum<EntitySource>
{
    private EntitySource(string value) : base(value)
    {
    }

    public static readonly EntitySource BotService = new("BOT_SERVICE");

    public static readonly EntitySource CoreNlp = new("CORE_NLP");

    public static readonly EntitySource EinsteinNlp = new("EINSTEIN_NLP");

    public TResult Match<TResult>(Func<TResult> onBotService,
        Func<TResult> onCoreNlp,
        Func<TResult> onEinsteinNlp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BotService => onBotService(),
            _ when this == CoreNlp => onCoreNlp(),
            _ when this == EinsteinNlp => onEinsteinNlp(),
            _ => otherwise(Value)
        };

    public void Match(Action onBotService, Action onCoreNlp, Action onEinsteinNlp, Action<string> otherwise)
    {
        if (this == BotService) onBotService();
        else if (this == CoreNlp) onCoreNlp();
        else if (this == EinsteinNlp) onEinsteinNlp();
        else otherwise(Value);
    }
}
