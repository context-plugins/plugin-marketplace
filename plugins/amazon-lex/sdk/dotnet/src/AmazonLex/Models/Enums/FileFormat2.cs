using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The file format used in the files that describe the resource.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FileFormat2>))]
public sealed record FileFormat2 : OpenStringEnum<FileFormat2>
{
    private FileFormat2(string value) : base(value)
    {
    }

    public static readonly FileFormat2 LexJson = new("LexJson");

    public static readonly FileFormat2 Tsv = new("TSV");

    public static readonly FileFormat2 Csv = new("CSV");

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
