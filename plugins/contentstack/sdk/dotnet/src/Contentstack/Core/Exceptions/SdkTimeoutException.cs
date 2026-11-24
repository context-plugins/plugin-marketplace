using System;
using Contentstack.Core.Models;

namespace Contentstack.Core.Exceptions;

public sealed class SdkTimeoutException(string message, Exception? innerException = null)
    : SdkConnectionException(message, innerException)
{
    public required TimeSpan Timeout { get; init; }

    internal static SdkTimeoutException For(CallContext call, TimeSpan timeout, string message, Exception? innerException = null) =>
        new(message, innerException)
        {
            Method = call.Method,
            RequestUri = call.RequestUri,
            Timeout = timeout,
        };
}
