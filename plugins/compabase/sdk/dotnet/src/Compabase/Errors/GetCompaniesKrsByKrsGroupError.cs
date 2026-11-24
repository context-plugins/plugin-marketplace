using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Compabase.Core.ErrorResponse;
using Compabase.Core.Models;

namespace Compabase.Errors;

public sealed class GetCompaniesKrsByKrsGroupError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private GetCompaniesKrsByKrsGroupError(Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static GetCompaniesKrsByKrsGroupError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default);

    private static GetCompaniesKrsByKrsGroupError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCompaniesKrsByKrsGroupError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCompaniesKrsByKrsGroupError)} holds no value.");
    }

    private static Task<GetCompaniesKrsByKrsGroupError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCompaniesKrsByKrsGroupError> Response { get; } = new(Create);
}
