using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Models;

namespace Bitbucket.Errors;

public sealed class GetPipelineContainerLogError : ApiError
{
    private readonly Optional<ErrorByteContent> _errorByteContentValue;

    private GetPipelineContainerLogError(Optional<ErrorByteContent> errorByteContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorByteContentValue = errorByteContentValue;
    }

    private static GetPipelineContainerLogError AsErrorByteContent(ErrorByteContent value) =>
        new(Optional<ErrorByteContent>.Some(value), default);

    private static GetPipelineContainerLogError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorByteContent([NotNullWhen(true)] out ErrorByteContent? value) =>
        _errorByteContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorByteContent, TResult> onErrorByteContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorByteContent(out var errorByteContentValue) => onErrorByteContent(errorByteContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetPipelineContainerLogError)} holds no value.")
        };

    public void Match(Action<ErrorByteContent> onErrorByteContent, Action<RawError> otherwise)
    {
        if (TryGetErrorByteContent(out var errorByteContentValue)) onErrorByteContent(errorByteContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetPipelineContainerLogError)} holds no value.");
    }

    private static Task<GetPipelineContainerLogError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.Bytes().As(AsErrorByteContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetPipelineContainerLogError> Response { get; } = new(Create);
}
