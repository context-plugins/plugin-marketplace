using AmazonForecast.Core.ErrorResponse;
using AmazonForecast.Core.Response;

namespace AmazonForecast.Core.Models;

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
