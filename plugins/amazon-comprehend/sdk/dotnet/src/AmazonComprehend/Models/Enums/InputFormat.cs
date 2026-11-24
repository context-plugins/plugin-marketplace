using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Specifies how the text in an input file should be processed. This is optional, and the default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputFormat>))]
public sealed record InputFormat : OpenStringEnum<InputFormat>
{
    private InputFormat(string value) : base(value)
    {
    }

    public static readonly InputFormat OneDocPerFile = new("ONE_DOC_PER_FILE");

    public static readonly InputFormat OneDocPerLine = new("ONE_DOC_PER_LINE");

    public TResult Match<TResult>(Func<TResult> onOneDocPerFile,
        Func<TResult> onOneDocPerLine,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OneDocPerFile => onOneDocPerFile(),
            _ when this == OneDocPerLine => onOneDocPerLine(),
            _ => otherwise(Value)
        };

    public void Match(Action onOneDocPerFile, Action onOneDocPerLine, Action<string> otherwise)
    {
        if (this == OneDocPerFile) onOneDocPerFile();
        else if (this == OneDocPerLine) onOneDocPerLine();
        else otherwise(Value);
    }
}
