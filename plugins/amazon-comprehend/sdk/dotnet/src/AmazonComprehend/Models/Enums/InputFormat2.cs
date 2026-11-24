using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Specifies how the text in an input file should be processed: ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option when you are processing large documents, such as newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when you are processing many short documents, such as text messages.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InputFormat2>))]
public sealed record InputFormat2 : OpenStringEnum<InputFormat2>
{
    private InputFormat2(string value) : base(value)
    {
    }

    public static readonly InputFormat2 OneDocPerFile = new("ONE_DOC_PER_FILE");

    public static readonly InputFormat2 OneDocPerLine = new("ONE_DOC_PER_LINE");

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
