using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Coresignal.Core.ErrorResponse;
using Coresignal.Core.Models;

namespace Coresignal.Errors;

public sealed class CollectCompanyError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private CollectCompanyError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static CollectCompanyError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static CollectCompanyError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CollectCompanyError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CollectCompanyError)} holds no value.");
    }

    private static Task<CollectCompanyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CollectCompanyError> Response { get; } = new(Create);
}
