using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RequestModel>))]
public sealed record RequestModel : OpenStringEnum<RequestModel>
{
    private RequestModel(string value) : base(value)
    {
    }

    public static readonly RequestModel RequestModelUnspecified = new("REQUEST_MODEL_UNSPECIFIED");

    public static readonly RequestModel RequestModelVirtualHostedStyle = new("REQUEST_MODEL_VIRTUAL_HOSTED_STYLE");

    public static readonly RequestModel RequestModelPathStyle = new("REQUEST_MODEL_PATH_STYLE");

    public TResult Match<TResult>(Func<TResult> onRequestModelUnspecified,
        Func<TResult> onRequestModelVirtualHostedStyle,
        Func<TResult> onRequestModelPathStyle,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RequestModelUnspecified => onRequestModelUnspecified(),
            _ when this == RequestModelVirtualHostedStyle => onRequestModelVirtualHostedStyle(),
            _ when this == RequestModelPathStyle => onRequestModelPathStyle(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequestModelUnspecified,
        Action onRequestModelVirtualHostedStyle,
        Action onRequestModelPathStyle,
        Action<string> otherwise)
    {
        if (this == RequestModelUnspecified) onRequestModelUnspecified();
        else if (this == RequestModelVirtualHostedStyle) onRequestModelVirtualHostedStyle();
        else if (this == RequestModelPathStyle) onRequestModelPathStyle();
        else otherwise(Value);
    }
}
