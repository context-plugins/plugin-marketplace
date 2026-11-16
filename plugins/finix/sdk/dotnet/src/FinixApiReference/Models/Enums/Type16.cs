using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of remediation action required.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type16>))]
public sealed record Type16 : OpenStringEnum<Type16>
{
    private Type16(string value) : base(value)
    {
    }

    public static readonly Type16 FieldUpdate = new("FIELD_UPDATE");

    public static readonly Type16 FileUpload = new("FILE_UPLOAD");

    public TResult Match<TResult>(Func<TResult> onFieldUpdate,
        Func<TResult> onFileUpload,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FieldUpdate => onFieldUpdate(),
            _ when this == FileUpload => onFileUpload(),
            _ => otherwise(Value)
        };

    public void Match(Action onFieldUpdate, Action onFileUpload, Action<string> otherwise)
    {
        if (this == FieldUpdate) onFieldUpdate();
        else if (this == FileUpload) onFileUpload();
        else otherwise(Value);
    }
}
