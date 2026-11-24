using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The file format used for the files that define the resource. The TSV format is required to export a custom vocabulary only; otherwise use LexJson format.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FileFormat4>))]
public sealed record FileFormat4 : OpenStringEnum<FileFormat4>
{
    private FileFormat4(string value) : base(value)
    {
    }

    public static readonly FileFormat4 LexJson = new("LexJson");

    public static readonly FileFormat4 Tsv = new("TSV");

    public static readonly FileFormat4 Csv = new("CSV");

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
