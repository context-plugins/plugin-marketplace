using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AtlassianCompass.Core.ErrorResponse;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models;

namespace AtlassianCompass.Errors;

public sealed class EvaluateEntitlementsError : ApiError
{
    private readonly Optional<ErrorResponseDto> _errorResponseDtoValue;

    private EvaluateEntitlementsError(Optional<ErrorResponseDto> errorResponseDtoValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseDtoValue = errorResponseDtoValue;
    }

    private static EvaluateEntitlementsError AsErrorResponseDto(ErrorResponseDto value) =>
        new(Optional<ErrorResponseDto>.Some(value), default);

    private static EvaluateEntitlementsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value) =>
        _errorResponseDtoValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseDto, TResult> onErrorResponseDto,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseDto(out var errorResponseDtoValue) => onErrorResponseDto(errorResponseDtoValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(EvaluateEntitlementsError)} holds no value.")
        };

    public void Match(Action<ErrorResponseDto> onErrorResponseDto, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseDto(out var errorResponseDtoValue)) onErrorResponseDto(errorResponseDtoValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(EvaluateEntitlementsError)} holds no value.");
    }

    private static Task<EvaluateEntitlementsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ErrorResponseDto>().As(AsErrorResponseDto),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<EvaluateEntitlementsError> Response { get; } = new(Create);
}
