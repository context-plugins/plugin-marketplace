using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Set the type of external link to create.
/// <list type="bullet">
///   <item><description><c>UPLOAD</c> - Create a link that can be used to upload files to Finix.</description></item>
///   <item><description><c>DOWNLOAD</c> - Create a link where the uploaded file can be downloaded from.</description></item>
///   <item><description><c>VIEW</c> - Create a link that displays the file in browser.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type46>))]
public sealed record Type46 : OpenStringEnum<Type46>
{
    private Type46(string value) : base(value)
    {
    }

    public static readonly Type46 Download = new("DOWNLOAD");

    public static readonly Type46 Upload = new("UPLOAD");

    public static readonly Type46 View = new("VIEW");

    public TResult Match<TResult>(Func<TResult> onDownload,
        Func<TResult> onUpload,
        Func<TResult> onView,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Download => onDownload(),
            _ when this == Upload => onUpload(),
            _ when this == View => onView(),
            _ => otherwise(Value)
        };

    public void Match(Action onDownload, Action onUpload, Action onView, Action<string> otherwise)
    {
        if (this == Download) onDownload();
        else if (this == Upload) onUpload();
        else if (this == View) onView();
        else otherwise(Value);
    }
}
