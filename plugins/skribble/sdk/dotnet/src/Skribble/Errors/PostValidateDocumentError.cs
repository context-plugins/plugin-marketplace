using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Skribble.Core.ErrorResponse;
using Skribble.Core.Models;
using Skribble.Models;

namespace Skribble.Errors;

public sealed class PostValidateDocumentError : ApiError
{
    private readonly Optional<ProblemSkribbleAdditionalInformationApi> _problemSkribbleAdditionalInformationApiValue;

    private PostValidateDocumentError(Optional<ProblemSkribbleAdditionalInformationApi> problemSkribbleAdditionalInformationApiValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _problemSkribbleAdditionalInformationApiValue = problemSkribbleAdditionalInformationApiValue;
    }

    private static PostValidateDocumentError AsProblemSkribbleAdditionalInformationApi(ProblemSkribbleAdditionalInformationApi value) =>
        new(Optional<ProblemSkribbleAdditionalInformationApi>.Some(value), default);

    private static PostValidateDocumentError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetProblemSkribbleAdditionalInformationApi([NotNullWhen(true)] out ProblemSkribbleAdditionalInformationApi? value) =>
        _problemSkribbleAdditionalInformationApiValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ProblemSkribbleAdditionalInformationApi, TResult> onProblemSkribbleAdditionalInformationApi,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetProblemSkribbleAdditionalInformationApi(
                out var problemSkribbleAdditionalInformationApiValue) => onProblemSkribbleAdditionalInformationApi(
                problemSkribbleAdditionalInformationApiValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostValidateDocumentError)} holds no value.")
        };

    public void Match(Action<ProblemSkribbleAdditionalInformationApi> onProblemSkribbleAdditionalInformationApi,
        Action<RawError> otherwise)
    {
        if (TryGetProblemSkribbleAdditionalInformationApi(
            out var problemSkribbleAdditionalInformationApiValue)) onProblemSkribbleAdditionalInformationApi(
            problemSkribbleAdditionalInformationApiValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostValidateDocumentError)} holds no value.");
    }

    private static Task<PostValidateDocumentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 413 or 415 or 429 or 500 or
                503 => response.Json<ProblemSkribbleAdditionalInformationApi>().As(
                AsProblemSkribbleAdditionalInformationApi),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostValidateDocumentError> Response { get; } = new(Create);
}
