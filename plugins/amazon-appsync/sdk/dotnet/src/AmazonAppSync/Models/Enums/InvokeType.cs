using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

/// <summary>
/// The invocation type for a Lambda data source.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InvokeType>))]
public sealed record InvokeType : OpenStringEnum<InvokeType>
{
    private InvokeType(string value) : base(value)
    {
    }

    public static readonly InvokeType RequestResponse = new("REQUEST_RESPONSE");

    public static readonly InvokeType Event = new("EVENT");

    public TResult Match<TResult>(Func<TResult> onRequestResponse,
        Func<TResult> onEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RequestResponse => onRequestResponse(),
            _ when this == Event => onEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onRequestResponse, Action onEvent, Action<string> otherwise)
    {
        if (this == RequestResponse) onRequestResponse();
        else if (this == Event) onEvent();
        else otherwise(Value);
    }
}
