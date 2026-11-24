using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FileOutput>))]
public sealed record FileOutput : OpenStringEnum<FileOutput>
{
    private FileOutput(string value) : base(value)
    {
    }

    public static readonly FileOutput Pdf = new("pdf");

    public static readonly FileOutput Png = new("png");

    public static readonly FileOutput Csv = new("csv");

    public TResult Match<TResult>(Func<TResult> onPdf,
        Func<TResult> onPng,
        Func<TResult> onCsv,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pdf => onPdf(),
            _ when this == Png => onPng(),
            _ when this == Csv => onCsv(),
            _ => otherwise(Value)
        };

    public void Match(Action onPdf, Action onPng, Action onCsv, Action<string> otherwise)
    {
        if (this == Pdf) onPdf();
        else if (this == Png) onPng();
        else if (this == Csv) onCsv();
        else otherwise(Value);
    }
}
