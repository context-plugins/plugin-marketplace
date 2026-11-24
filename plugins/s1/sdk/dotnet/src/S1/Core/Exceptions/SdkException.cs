using System;
using System.Net.Http;

namespace S1.Core.Exceptions;

public abstract class SdkException(string message, Exception? innerException = null)
    : Exception(message, innerException)
{
    public required HttpMethod Method { get; init; }

    public required Uri RequestUri { get; init; }
}
