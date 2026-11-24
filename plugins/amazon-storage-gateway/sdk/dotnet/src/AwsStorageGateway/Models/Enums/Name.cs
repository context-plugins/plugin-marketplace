using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The parameter name for a filter that determines which files are included or excluded from a cache report. Valid Names: UploadFailureReason | UploadState
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Name>))]
public sealed record Name : OpenStringEnum<Name>
{
    private Name(string value) : base(value)
    {
    }

    public static readonly Name UploadState = new("UploadState");

    public static readonly Name UploadFailureReason = new("UploadFailureReason");

    public TResult Match<TResult>(Func<TResult> onUploadState,
        Func<TResult> onUploadFailureReason,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UploadState => onUploadState(),
            _ when this == UploadFailureReason => onUploadFailureReason(),
            _ => otherwise(Value)
        };

    public void Match(Action onUploadState, Action onUploadFailureReason, Action<string> otherwise)
    {
        if (this == UploadState) onUploadState();
        else if (this == UploadFailureReason) onUploadFailureReason();
        else otherwise(Value);
    }
}
