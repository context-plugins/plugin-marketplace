using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The file format used for the bot or bot locale definition files.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FileFormat1>))]
public sealed record FileFormat1 : OpenStringEnum<FileFormat1>
{
    private FileFormat1(string value) : base(value)
    {
    }

    public static readonly FileFormat1 LexJson = new("LexJson");

    public static readonly FileFormat1 Tsv = new("TSV");

    public static readonly FileFormat1 Csv = new("CSV");

    public TResult Match<TResult>(Func<TResult> onLexJson,
        Func<TResult> onTsv,
        Func<TResult> onCsv,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LexJson => onLexJson(),
            _ when this == Tsv => onTsv(),
            _ when this == Csv => onCsv(),
            _ => otherwise(Value)
        };

    public void Match(Action onLexJson, Action onTsv, Action onCsv, Action<string> otherwise)
    {
        if (this == LexJson) onLexJson();
        else if (this == Tsv) onTsv();
        else if (this == Csv) onCsv();
        else otherwise(Value);
    }
}
