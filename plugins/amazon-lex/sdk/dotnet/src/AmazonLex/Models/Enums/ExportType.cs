using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The format of the exported data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExportType>))]
public sealed record ExportType : OpenStringEnum<ExportType>
{
    private ExportType(string value) : base(value)
    {
    }

    public static readonly ExportType AlexaSkillsKit = new("ALEXA_SKILLS_KIT");

    public static readonly ExportType Lex = new("LEX");

    public TResult Match<TResult>(Func<TResult> onAlexaSkillsKit,
        Func<TResult> onLex,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AlexaSkillsKit => onAlexaSkillsKit(),
            _ when this == Lex => onLex(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlexaSkillsKit, Action onLex, Action<string> otherwise)
    {
        if (this == AlexaSkillsKit) onAlexaSkillsKit();
        else if (this == Lex) onLex();
        else otherwise(Value);
    }
}
