using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AtlassianCompass.Core.ErrorResponse;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models;

namespace AtlassianCompass.Errors;

public sealed class InsertMetricValueError : ApiError
{
    private readonly Optional<ErrorResponseDto> _errorResponseDtoValue;

    private readonly Optional<InsertMetricResponseDto> _insertMetricResponseDtoValue;

    private InsertMetricValueError(Optional<ErrorResponseDto> errorResponseDtoValue,
        Optional<InsertMetricResponseDto> insertMetricResponseDtoValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseDtoValue = errorResponseDtoValue;
        _insertMetricResponseDtoValue = insertMetricResponseDtoValue;
    }

    private static InsertMetricValueError AsErrorResponseDto(ErrorResponseDto value) =>
        new(Optional<ErrorResponseDto>.Some(value), default, default);

    private static InsertMetricValueError AsInsertMetricResponseDto(InsertMetricResponseDto value) =>
        new(default, Optional<InsertMetricResponseDto>.Some(value), default);

    private static InsertMetricValueError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value) =>
        _errorResponseDtoValue.TryGetValue(out value);

    public bool TryGetInsertMetricResponseDto([NotNullWhen(true)] out InsertMetricResponseDto? value) =>
        _insertMetricResponseDtoValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseDto, TResult> onErrorResponseDto,
        Func<InsertMetricResponseDto, TResult> onInsertMetricResponseDto,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseDto(out var errorResponseDtoValue) => onErrorResponseDto(errorResponseDtoValue),
            _ when TryGetInsertMetricResponseDto(out var insertMetricResponseDtoValue) => onInsertMetricResponseDto(
                insertMetricResponseDtoValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(InsertMetricValueError)} holds no value.")
        };

    public void Match(Action<ErrorResponseDto> onErrorResponseDto,
        Action<InsertMetricResponseDto> onInsertMetricResponseDto,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseDto(out var errorResponseDtoValue)) onErrorResponseDto(errorResponseDtoValue);
        else if (TryGetInsertMetricResponseDto(out var insertMetricResponseDtoValue)) onInsertMetricResponseDto(
            insertMetricResponseDtoValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(InsertMetricValueError)} holds no value.");
    }

    private static Task<InsertMetricValueError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 404 => response.Json<ErrorResponseDto>().As(AsErrorResponseDto),
            429 => response.Json<InsertMetricResponseDto>().As(AsInsertMetricResponseDto),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<InsertMetricValueError> Response { get; } = new(Create);
}
