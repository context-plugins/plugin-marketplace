using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using OddsRelay.Core.ErrorResponse;
using OddsRelay.Core.Models;

namespace OddsRelay.Errors;

public sealed class GetLivenessError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private readonly Optional<string> _stringValue;

    private GetLivenessError(Optional<RawError> noContentValue,
        Optional<string> stringValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
        _stringValue = stringValue;
    }

    private static GetLivenessError AsNoContent(RawError value) =>
        new(Optional<RawError>.Some(value), default, default);

    private static GetLivenessError AsString(string value) => new(default, Optional<string>.Some(value), default);

    private static GetLivenessError AsFallback(RawError value) => new(default, default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent,
        Func<string, TResult> onString,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetLivenessError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetLivenessError)} holds no value.");
    }

    private static Task<GetLivenessError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            502 => response.RawBody().As(AsNoContent),
            503 => response.Scalar(s => s).As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetLivenessError> Response { get; } = new(Create);
}
