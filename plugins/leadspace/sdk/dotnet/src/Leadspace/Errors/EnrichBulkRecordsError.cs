using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Leadspace.Core.ErrorResponse;
using Leadspace.Core.Models;
using Leadspace.Models;

namespace Leadspace.Errors;

public sealed class EnrichBulkRecordsError : ApiError
{
    private readonly Optional<ErrorLeadspaceApiV4EnrichmentApi> _errorLeadspaceApiV4EnrichmentApiValue;

    private readonly Optional<RawError> _noContentValue;

    private EnrichBulkRecordsError(Optional<ErrorLeadspaceApiV4EnrichmentApi> errorLeadspaceApiV4EnrichmentApiValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorLeadspaceApiV4EnrichmentApiValue = errorLeadspaceApiV4EnrichmentApiValue;
        _noContentValue = noContentValue;
    }

    private static EnrichBulkRecordsError AsErrorLeadspaceApiV4EnrichmentApi(ErrorLeadspaceApiV4EnrichmentApi value) =>
        new(Optional<ErrorLeadspaceApiV4EnrichmentApi>.Some(value), default, default);

    private static EnrichBulkRecordsError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static EnrichBulkRecordsError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorLeadspaceApiV4EnrichmentApi([NotNullWhen(true)] out ErrorLeadspaceApiV4EnrichmentApi? value) =>
        _errorLeadspaceApiV4EnrichmentApiValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorLeadspaceApiV4EnrichmentApi, TResult> onErrorLeadspaceApiV4EnrichmentApi,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorLeadspaceApiV4EnrichmentApi(
                out var errorLeadspaceApiV4EnrichmentApiValue) => onErrorLeadspaceApiV4EnrichmentApi(
                errorLeadspaceApiV4EnrichmentApiValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(EnrichBulkRecordsError)} holds no value.")
        };

    public void Match(Action<ErrorLeadspaceApiV4EnrichmentApi> onErrorLeadspaceApiV4EnrichmentApi,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetErrorLeadspaceApiV4EnrichmentApi(
            out var errorLeadspaceApiV4EnrichmentApiValue)) onErrorLeadspaceApiV4EnrichmentApi(
            errorLeadspaceApiV4EnrichmentApiValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(EnrichBulkRecordsError)} holds no value.");
    }

    private static Task<EnrichBulkRecordsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 427 or 500 => response.Json<ErrorLeadspaceApiV4EnrichmentApi>().As(
                AsErrorLeadspaceApiV4EnrichmentApi),
            401 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<EnrichBulkRecordsError> Response { get; } = new(Create);
}
