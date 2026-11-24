using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Determines the text extraction actions for PDF files. Enter one of the following values: SERVICE_DEFAULT - use the Amazon Comprehend service defaults for PDF files. FORCE_DOCUMENT_READ_ACTION - Amazon Comprehend uses the Textract API specified by DocumentReadAction for all PDF files, including digital PDF files.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DocumentReadMode>))]
public sealed record DocumentReadMode : OpenStringEnum<DocumentReadMode>
{
    private DocumentReadMode(string value) : base(value)
    {
    }

    public static readonly DocumentReadMode ServiceDefault = new("SERVICE_DEFAULT");

    public static readonly DocumentReadMode ForceDocumentReadAction = new("FORCE_DOCUMENT_READ_ACTION");

    public TResult Match<TResult>(Func<TResult> onServiceDefault,
        Func<TResult> onForceDocumentReadAction,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ServiceDefault => onServiceDefault(),
            _ when this == ForceDocumentReadAction => onForceDocumentReadAction(),
            _ => otherwise(Value)
        };

    public void Match(Action onServiceDefault, Action onForceDocumentReadAction, Action<string> otherwise)
    {
        if (this == ServiceDefault) onServiceDefault();
        else if (this == ForceDocumentReadAction) onForceDocumentReadAction();
        else otherwise(Value);
    }
}
