using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The status message code for the dataset operation. If a service error occurs, try the API call again later. If a client error occurs, check the input parameters to the dataset API call that failed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusMessageCode>))]
public sealed record StatusMessageCode : OpenStringEnum<StatusMessageCode>
{
    private StatusMessageCode(string value) : base(value)
    {
    }

    public static readonly StatusMessageCode Success = new("SUCCESS");

    public static readonly StatusMessageCode ServiceError = new("SERVICE_ERROR");

    public static readonly StatusMessageCode ClientError = new("CLIENT_ERROR");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onServiceError,
        Func<TResult> onClientError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == ServiceError => onServiceError(),
            _ when this == ClientError => onClientError(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onServiceError, Action onClientError, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == ServiceError) onServiceError();
        else if (this == ClientError) onClientError();
        else otherwise(Value);
    }
}
