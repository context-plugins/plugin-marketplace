using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DevCycle.Core.ErrorResponse;
using DevCycle.Core.Models;
using DevCycle.Models;

namespace DevCycle.Errors;

public sealed class FeaturesControllerFindStaticConfigurationError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<PreconditionFailedErrorResponse> _preconditionFailedErrorResponseValue;

    private FeaturesControllerFindStaticConfigurationError(Optional<RawError> noContentValue,
        Optional<PreconditionFailedErrorResponse> preconditionFailedErrorResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _preconditionFailedErrorResponseValue = preconditionFailedErrorResponseValue;
    }

    private static FeaturesControllerFindStaticConfigurationError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default);

    private static FeaturesControllerFindStaticConfigurationError AsPreconditionFailedErrorResponse(PreconditionFailedErrorResponse value) =>
        new(default, Optional<PreconditionFailedErrorResponse>.Some(value), default);

    private static FeaturesControllerFindStaticConfigurationError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetPreconditionFailedErrorResponse([NotNullWhen(true)] out PreconditionFailedErrorResponse? value) =>
        _preconditionFailedErrorResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<PreconditionFailedErrorResponse, TResult> onPreconditionFailedErrorResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetPreconditionFailedErrorResponse(
                out var preconditionFailedErrorResponseValue) => onPreconditionFailedErrorResponse(
                preconditionFailedErrorResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(FeaturesControllerFindStaticConfigurationError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent,
        Action<PreconditionFailedErrorResponse> onPreconditionFailedErrorResponse,
        Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetPreconditionFailedErrorResponse(
            out var preconditionFailedErrorResponseValue)) onPreconditionFailedErrorResponse(
            preconditionFailedErrorResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(FeaturesControllerFindStaticConfigurationError)} holds no value.");
    }

    private static Task<FeaturesControllerFindStaticConfigurationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 403 or 404 => response.RawBody().As(AsNoContent),
            412 => response.Json<PreconditionFailedErrorResponse>().As(AsPreconditionFailedErrorResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<FeaturesControllerFindStaticConfigurationError> Response { get; } = new(Create);
}
