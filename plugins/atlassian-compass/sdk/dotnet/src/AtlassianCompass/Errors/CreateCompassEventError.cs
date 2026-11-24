using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AtlassianCompass.Core.ErrorResponse;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models;

namespace AtlassianCompass.Errors;

public sealed class CreateCompassEventError : ApiError
{
    private readonly Optional<ErrorResponseDto> _errorResponseDtoValue;

    private readonly Optional<RawError> _noContentValue;

    private CreateCompassEventError(Optional<ErrorResponseDto> errorResponseDtoValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseDtoValue = errorResponseDtoValue;
        _noContentValue = noContentValue;
    }

    private static CreateCompassEventError AsErrorResponseDto(ErrorResponseDto value) =>
        new(Optional<ErrorResponseDto>.Some(value), default, default);

    private static CreateCompassEventError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static CreateCompassEventError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value) =>
        _errorResponseDtoValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseDto, TResult> onErrorResponseDto,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseDto(out var errorResponseDtoValue) => onErrorResponseDto(errorResponseDtoValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateCompassEventError)} holds no value.")
        };

    public void Match(Action<ErrorResponseDto> onErrorResponseDto,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseDto(out var errorResponseDtoValue)) onErrorResponseDto(errorResponseDtoValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateCompassEventError)} holds no value.");
    }

    private static Task<CreateCompassEventError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 => response.Json<ErrorResponseDto>().As(AsErrorResponseDto),
            429 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateCompassEventError> Response { get; } = new(Create);
}
