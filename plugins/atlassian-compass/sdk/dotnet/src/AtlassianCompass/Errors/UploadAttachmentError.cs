using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AtlassianCompass.Core.ErrorResponse;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models;

namespace AtlassianCompass.Errors;

public sealed class UploadAttachmentError : ApiError
{
    private readonly Optional<ErrorResponseDto> _errorResponseDtoValue;

    private UploadAttachmentError(Optional<ErrorResponseDto> errorResponseDtoValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseDtoValue = errorResponseDtoValue;
    }

    private static UploadAttachmentError AsErrorResponseDto(ErrorResponseDto value) =>
        new(Optional<ErrorResponseDto>.Some(value), default);

    private static UploadAttachmentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseDto([NotNullWhen(true)] out ErrorResponseDto? value) =>
        _errorResponseDtoValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseDto, TResult> onErrorResponseDto,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseDto(out var errorResponseDtoValue) => onErrorResponseDto(errorResponseDtoValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadAttachmentError)} holds no value.")
        };

    public void Match(Action<ErrorResponseDto> onErrorResponseDto, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseDto(out var errorResponseDtoValue)) onErrorResponseDto(errorResponseDtoValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadAttachmentError)} holds no value.");
    }

    private static Task<UploadAttachmentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 404 or 422 or 500 => response.Json<ErrorResponseDto>().As(AsErrorResponseDto),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadAttachmentError> Response { get; } = new(Create);
}
