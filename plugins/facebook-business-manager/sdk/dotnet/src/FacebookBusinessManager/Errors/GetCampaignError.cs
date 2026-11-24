using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using FacebookBusinessManager.Core.ErrorResponse;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Errors;

public sealed class GetCampaignError : ApiError
{
    private readonly Optional<Error> _errorValue;

    private GetCampaignError(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static GetCampaignError AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static GetCampaignError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCampaignError)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCampaignError)} holds no value.");
    }

    private static Task<GetCampaignError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCampaignError> Response { get; } = new(Create);
}
