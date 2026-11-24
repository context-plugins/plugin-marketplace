using System;
using System.Net;
using System.Net.Http.Headers;

namespace Ortto.Core.Exceptions;

public abstract class ApiException(string message, Exception? innerException = null)
    : SdkException(message, innerException)
{
    public required HttpStatusCode StatusCode { get; init; }

    public required HttpResponseHeaders Headers { get; init; }

    public required MediaTypeHeaderValue? ContentType { get; init; }
}

public sealed class ApiException<TError>(string message, Exception? innerException = null)
    : ApiException(message, innerException)
{
    public required TError Error { get; init; }
}
