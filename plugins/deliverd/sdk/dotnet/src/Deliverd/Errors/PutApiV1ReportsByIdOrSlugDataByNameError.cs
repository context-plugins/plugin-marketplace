using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;

namespace Deliverd.Errors;

public sealed class PutApiV1ReportsByIdOrSlugDataByNameError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private PutApiV1ReportsByIdOrSlugDataByNameError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static PutApiV1ReportsByIdOrSlugDataByNameError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static PutApiV1ReportsByIdOrSlugDataByNameError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PutApiV1ReportsByIdOrSlugDataByNameError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PutApiV1ReportsByIdOrSlugDataByNameError)} holds no value.");
    }

    private static Task<PutApiV1ReportsByIdOrSlugDataByNameError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 409 or 413 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutApiV1ReportsByIdOrSlugDataByNameError> Response { get; } = new(Create);
}
