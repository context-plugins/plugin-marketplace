using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

/// <summary>
/// The standard media type for the LOA-CFA document. The only supported value is application/pdf.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LoaContentType>))]
public sealed record LoaContentType : OpenStringEnum<LoaContentType>
{
    private LoaContentType(string value) : base(value)
    {
    }

    public static readonly LoaContentType ApplicationPdf = new("application/pdf");

    public TResult Match<TResult>(Func<TResult> onApplicationPdf, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApplicationPdf => onApplicationPdf(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplicationPdf, Action<string> otherwise)
    {
        if (this == ApplicationPdf) onApplicationPdf();
        else otherwise(Value);
    }
}
