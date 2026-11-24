using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DidLogic.Core.ErrorResponse;
using DidLogic.Core.Models;
using DidLogic.Models;

namespace DidLogic.Errors;

public sealed class DocumentsCountriesError : ApiError
{
    private readonly Optional<ApiV2DocumentsCountries401Error1> _apiV2DocumentsCountries401Error1Value;

    private DocumentsCountriesError(Optional<ApiV2DocumentsCountries401Error1> apiV2DocumentsCountries401Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2DocumentsCountries401Error1Value = apiV2DocumentsCountries401Error1Value;
    }

    private static DocumentsCountriesError AsApiV2DocumentsCountries401Error1(ApiV2DocumentsCountries401Error1 value) =>
        new(Optional<ApiV2DocumentsCountries401Error1>.Some(value), default);

    private static DocumentsCountriesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2DocumentsCountries401Error1([NotNullWhen(true)] out ApiV2DocumentsCountries401Error1? value) =>
        _apiV2DocumentsCountries401Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2DocumentsCountries401Error1, TResult> onApiV2DocumentsCountries401Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2DocumentsCountries401Error1(
                out var apiV2DocumentsCountries401Error1Value) => onApiV2DocumentsCountries401Error1(
                apiV2DocumentsCountries401Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DocumentsCountriesError)} holds no value.")
        };

    public void Match(Action<ApiV2DocumentsCountries401Error1> onApiV2DocumentsCountries401Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV2DocumentsCountries401Error1(
            out var apiV2DocumentsCountries401Error1Value)) onApiV2DocumentsCountries401Error1(
            apiV2DocumentsCountries401Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DocumentsCountriesError)} holds no value.");
    }

    private static Task<DocumentsCountriesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<ApiV2DocumentsCountries401Error1>().As(AsApiV2DocumentsCountries401Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DocumentsCountriesError> Response { get; } = new(Create);
}
