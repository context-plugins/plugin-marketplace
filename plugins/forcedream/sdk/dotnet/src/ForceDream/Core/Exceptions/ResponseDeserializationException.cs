using System;
using ForceDream.Core.Models;

namespace ForceDream.Core.Exceptions;

public sealed class ResponseDeserializationException(string message, Exception innerException)
    : ApiException(message, innerException)
{
    public required Type TargetType { get; init; }

    internal static ResponseDeserializationException For(
        ResponseContext context, Type targetType, string message, Exception innerException) =>
        new(message, innerException)
        {
            Method = context.Call.Method,
            RequestUri = context.Call.RequestUri,
            StatusCode = context.Response.StatusCode,
            Headers = context.Response.Headers,
            ContentType = context.Response.Content?.Headers.ContentType,
            TargetType = targetType,
        };
}
