using Crawl4Ai.Core.ErrorResponse;
using Crawl4Ai.Core.Response;

namespace Crawl4Ai.Core.Models;

internal sealed class ApiResponse<TResponse, TError>
{
    public IResponse<TResponse> Response { get; }
    public IErrorResponse<TError> ErrorResponseDeserializer { get; }

    public ApiResponse(IResponse<TResponse> response, IErrorResponse<TError> errorResponseDeserializer)
    {
        Response = response;
        ErrorResponseDeserializer = errorResponseDeserializer;
    }
}

internal static class ApiResponse
{
    public static ApiResponse<TResponse, TError> Create<TResponse, TError>(IResponse<TResponse> response,
        IErrorResponse<TError> errorResponseDeserializer) =>
        new(response, errorResponseDeserializer);
}
