using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of the report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AnnotationType>))]
public sealed record AnnotationType : OpenStringEnum<AnnotationType>
{
    private AnnotationType(string value) : base(value)
    {
    }

    public static readonly AnnotationType Vulnerability = new("VULNERABILITY");

    public static readonly AnnotationType CodeSmell = new("CODE_SMELL");

    public static readonly AnnotationType Bug = new("BUG");

    public TResult Match<TResult>(Func<TResult> onVulnerability,
        Func<TResult> onCodeSmell,
        Func<TResult> onBug,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Vulnerability => onVulnerability(),
            _ when this == CodeSmell => onCodeSmell(),
            _ when this == Bug => onBug(),
            _ => otherwise(Value)
        };

    public void Match(Action onVulnerability, Action onCodeSmell, Action onBug, Action<string> otherwise)
    {
        if (this == Vulnerability) onVulnerability();
        else if (this == CodeSmell) onCodeSmell();
        else if (this == Bug) onBug();
        else otherwise(Value);
    }
}
