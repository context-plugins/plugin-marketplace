using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Paid.Core.ErrorResponse;
using Paid.Core.Models;
using Paid.Models;

namespace Paid.Errors;

public sealed class UsageRecordBulkV2Error : ApiError
{
    private readonly Optional<Error> _errorValue;

    private UsageRecordBulkV2Error(Optional<Error> errorValue, Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static UsageRecordBulkV2Error AsError(Error value) => new(Optional<Error>.Some(value), default);

    private static UsageRecordBulkV2Error AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UsageRecordBulkV2Error)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UsageRecordBulkV2Error)} holds no value.");
    }

    private static Task<UsageRecordBulkV2Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 409 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UsageRecordBulkV2Error> Response { get; } = new(Create);
}
