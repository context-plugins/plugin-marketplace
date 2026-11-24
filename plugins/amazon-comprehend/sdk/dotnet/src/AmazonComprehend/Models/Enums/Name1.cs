using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The name of the toxic content type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name1>))]
public sealed record Name1 : OpenStringEnum<Name1>
{
    private Name1(string value) : base(value)
    {
    }

    public static readonly Name1 Graphic = new("GRAPHIC");

    public static readonly Name1 HarassmentOrAbuse = new("HARASSMENT_OR_ABUSE");

    public static readonly Name1 HateSpeech = new("HATE_SPEECH");

    public static readonly Name1 Insult = new("INSULT");

    public static readonly Name1 Profanity = new("PROFANITY");

    public static readonly Name1 Sexual = new("SEXUAL");

    public static readonly Name1 ViolenceOrThreat = new("VIOLENCE_OR_THREAT");

    public TResult Match<TResult>(Func<TResult> onGraphic,
        Func<TResult> onHarassmentOrAbuse,
        Func<TResult> onHateSpeech,
        Func<TResult> onInsult,
        Func<TResult> onProfanity,
        Func<TResult> onSexual,
        Func<TResult> onViolenceOrThreat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Graphic => onGraphic(),
            _ when this == HarassmentOrAbuse => onHarassmentOrAbuse(),
            _ when this == HateSpeech => onHateSpeech(),
            _ when this == Insult => onInsult(),
            _ when this == Profanity => onProfanity(),
            _ when this == Sexual => onSexual(),
            _ when this == ViolenceOrThreat => onViolenceOrThreat(),
            _ => otherwise(Value)
        };

    public void Match(Action onGraphic,
        Action onHarassmentOrAbuse,
        Action onHateSpeech,
        Action onInsult,
        Action onProfanity,
        Action onSexual,
        Action onViolenceOrThreat,
        Action<string> otherwise)
    {
        if (this == Graphic) onGraphic();
        else if (this == HarassmentOrAbuse) onHarassmentOrAbuse();
        else if (this == HateSpeech) onHateSpeech();
        else if (this == Insult) onInsult();
        else if (this == Profanity) onProfanity();
        else if (this == Sexual) onSexual();
        else if (this == ViolenceOrThreat) onViolenceOrThreat();
        else otherwise(Value);
    }
}
