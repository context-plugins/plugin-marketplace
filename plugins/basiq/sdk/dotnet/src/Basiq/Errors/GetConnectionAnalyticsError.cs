using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetConnectionAnalyticsError : ApiError
{
    private readonly Optional<ErrorList> _errorListValue;

    private readonly Optional<RawError> _noContentValue;

    private GetConnectionAnalyticsError(Optional<ErrorList> errorListValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorListValue = errorListValue;
        _noContentValue = noContentValue;
    }

    private static GetConnectionAnalyticsError AsErrorList(ErrorList value) =>
        new(Optional<ErrorList>.Some(value), default, default);

    private static GetConnectionAnalyticsError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static GetConnectionAnalyticsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorList([NotNullWhen(true)] out ErrorList? value) => _errorListValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorList, TResult> onErrorList,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorList(out var errorListValue) => onErrorList(errorListValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetConnectionAnalyticsError)} holds no value.")
        };

    public void Match(Action<ErrorList> onErrorList, Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetErrorList(out var errorListValue)) onErrorList(errorListValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetConnectionAnalyticsError)} holds no value.");
    }

    private static Task<GetConnectionAnalyticsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 => response.Json<ErrorList>().As(AsErrorList),
            401 or 500 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetConnectionAnalyticsError> Response { get; } = new(Create);
}
