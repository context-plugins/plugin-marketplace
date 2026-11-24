using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;

namespace Deliverd.Errors;

public sealed class DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException(
            $"{nameof(DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError)} holds no value.");
    }

    private static Task<DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteApiV1ReportsByIdOrSlugCommentsByCommentIdError> Response { get; } = new(
        Create);
}
