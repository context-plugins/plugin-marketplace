using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Sets whether the link uploads or downloads files from Finix.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type45>))]
public sealed record Type45 : OpenStringEnum<Type45>
{
    private Type45(string value) : base(value)
    {
    }

    public static readonly Type45 Upload = new("UPLOAD");

    public static readonly Type45 Download = new("DOWNLOAD");

    public static readonly Type45 View = new("VIEW");

    public TResult Match<TResult>(Func<TResult> onUpload,
        Func<TResult> onDownload,
        Func<TResult> onView,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Upload => onUpload(),
            _ when this == Download => onDownload(),
            _ when this == View => onView(),
            _ => otherwise(Value)
        };

    public void Match(Action onUpload, Action onDownload, Action onView, Action<string> otherwise)
    {
        if (this == Upload) onUpload();
        else if (this == Download) onDownload();
        else if (this == View) onView();
        else otherwise(Value);
    }
}
