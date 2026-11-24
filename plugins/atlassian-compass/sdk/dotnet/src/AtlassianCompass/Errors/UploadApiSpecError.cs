using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using AtlassianCompass.Core.ErrorResponse;
using AtlassianCompass.Core.Models;

namespace AtlassianCompass.Errors;

public sealed class UploadApiSpecError : ApiError
{
    private readonly Optional<string> _stringValue;

    private UploadApiSpecError(Optional<string> stringValue, Optional<RawError> fallback) : base(fallback)
    {
        _stringValue = stringValue;
    }

    private static UploadApiSpecError AsString(string value) => new(Optional<string>.Some(value), default);

    private static UploadApiSpecError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadApiSpecError)} holds no value.")
        };

    public void Match(Action<string> onString, Action<RawError> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadApiSpecError)} holds no value.");
    }

    private static Task<UploadApiSpecError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 422 => response.Json<string>().As(AsString),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadApiSpecError> Response { get; } = new(Create);
}
