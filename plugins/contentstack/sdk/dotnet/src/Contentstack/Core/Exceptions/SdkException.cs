using System;
using System.Net.Http;

namespace Contentstack.Core.Exceptions;

public abstract class SdkException(string message, Exception? innerException = null)
    : Exception(message, innerException)
{
    public required HttpMethod Method { get; init; }

    public required Uri RequestUri { get; init; }
}
