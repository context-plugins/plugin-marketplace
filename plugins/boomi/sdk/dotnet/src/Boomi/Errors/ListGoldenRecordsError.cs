using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Boomi.Core.ErrorResponse;
using Boomi.Core.Models;
using Boomi.Models;

namespace Boomi.Errors;

public sealed class ListGoldenRecordsError : ApiError
{
    private readonly Optional<ErrorResponseBoomiDataHubGoldenRecordsApi> _errorResponseBoomiDataHubGoldenRecordsApiValue;

    private ListGoldenRecordsError(Optional<ErrorResponseBoomiDataHubGoldenRecordsApi> errorResponseBoomiDataHubGoldenRecordsApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBoomiDataHubGoldenRecordsApiValue = errorResponseBoomiDataHubGoldenRecordsApiValue;
    }

    private static ListGoldenRecordsError AsErrorResponseBoomiDataHubGoldenRecordsApi(ErrorResponseBoomiDataHubGoldenRecordsApi value) =>
        new(Optional<ErrorResponseBoomiDataHubGoldenRecordsApi>.Some(value), default);

    private static ListGoldenRecordsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBoomiDataHubGoldenRecordsApi([NotNullWhen(true)] out ErrorResponseBoomiDataHubGoldenRecordsApi? value) =>
        _errorResponseBoomiDataHubGoldenRecordsApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBoomiDataHubGoldenRecordsApi, TResult> onErrorResponseBoomiDataHubGoldenRecordsApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBoomiDataHubGoldenRecordsApi(
                out var errorResponseBoomiDataHubGoldenRecordsApiValue) => onErrorResponseBoomiDataHubGoldenRecordsApi(
                errorResponseBoomiDataHubGoldenRecordsApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListGoldenRecordsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBoomiDataHubGoldenRecordsApi> onErrorResponseBoomiDataHubGoldenRecordsApi,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBoomiDataHubGoldenRecordsApi(
            out var errorResponseBoomiDataHubGoldenRecordsApiValue)) onErrorResponseBoomiDataHubGoldenRecordsApi(
            errorResponseBoomiDataHubGoldenRecordsApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListGoldenRecordsError)} holds no value.");
    }

    private static Task<ListGoldenRecordsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<ErrorResponseBoomiDataHubGoldenRecordsApi>().As(
                AsErrorResponseBoomiDataHubGoldenRecordsApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListGoldenRecordsError> Response { get; } = new(Create);
}
