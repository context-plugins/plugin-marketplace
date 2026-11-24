using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using MrScraper.Core.ErrorResponse;
using MrScraper.Core.Models;
using MrScraper.Models;

namespace MrScraper.Errors;

public sealed class GetStorageByKeyError : ApiError
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<Storage400Error1> _storage400Error1Value;

    private readonly Optional<Storage403Error1> _storage403Error1Value;

    private readonly Optional<Storage404Error1> _storage404Error1Value;

    private readonly Optional<Storage503Error1> _storage503Error1Value;

    private GetStorageByKeyError(Optional<object> anonymousObjectValue,
        Optional<Storage400Error1> storage400Error1Value,
        Optional<Storage403Error1> storage403Error1Value,
        Optional<Storage404Error1> storage404Error1Value,
        Optional<Storage503Error1> storage503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _storage400Error1Value = storage400Error1Value;
        _storage403Error1Value = storage403Error1Value;
        _storage404Error1Value = storage404Error1Value;
        _storage503Error1Value = storage503Error1Value;
    }

    private static GetStorageByKeyError AsAnonymousObject(object value) =>
        new(Optional<object>.Some(value), default, default, default, default, default);

    private static GetStorageByKeyError AsStorage400Error1(Storage400Error1 value) =>
        new(default, Optional<Storage400Error1>.Some(value), default, default, default, default);

    private static GetStorageByKeyError AsStorage403Error1(Storage403Error1 value) =>
        new(default, default, Optional<Storage403Error1>.Some(value), default, default, default);

    private static GetStorageByKeyError AsStorage404Error1(Storage404Error1 value) =>
        new(default, default, default, Optional<Storage404Error1>.Some(value), default, default);

    private static GetStorageByKeyError AsStorage503Error1(Storage503Error1 value) =>
        new(default, default, default, default, Optional<Storage503Error1>.Some(value), default);

    private static GetStorageByKeyError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetStorage400Error1([NotNullWhen(true)] out Storage400Error1? value) =>
        _storage400Error1Value.TryGetValue(out value);

    public bool TryGetStorage403Error1([NotNullWhen(true)] out Storage403Error1? value) =>
        _storage403Error1Value.TryGetValue(out value);

    public bool TryGetStorage404Error1([NotNullWhen(true)] out Storage404Error1? value) =>
        _storage404Error1Value.TryGetValue(out value);

    public bool TryGetStorage503Error1([NotNullWhen(true)] out Storage503Error1? value) =>
        _storage503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject,
        Func<Storage400Error1, TResult> onStorage400Error1,
        Func<Storage403Error1, TResult> onStorage403Error1,
        Func<Storage404Error1, TResult> onStorage404Error1,
        Func<Storage503Error1, TResult> onStorage503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetStorage400Error1(out var storage400Error1Value) => onStorage400Error1(storage400Error1Value),
            _ when TryGetStorage403Error1(out var storage403Error1Value) => onStorage403Error1(storage403Error1Value),
            _ when TryGetStorage404Error1(out var storage404Error1Value) => onStorage404Error1(storage404Error1Value),
            _ when TryGetStorage503Error1(out var storage503Error1Value) => onStorage503Error1(storage503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetStorageByKeyError)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject,
        Action<Storage400Error1> onStorage400Error1,
        Action<Storage403Error1> onStorage403Error1,
        Action<Storage404Error1> onStorage404Error1,
        Action<Storage503Error1> onStorage503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetStorage400Error1(out var storage400Error1Value)) onStorage400Error1(storage400Error1Value);
        else if (TryGetStorage403Error1(out var storage403Error1Value)) onStorage403Error1(storage403Error1Value);
        else if (TryGetStorage404Error1(out var storage404Error1Value)) onStorage404Error1(storage404Error1Value);
        else if (TryGetStorage503Error1(out var storage503Error1Value)) onStorage503Error1(storage503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetStorageByKeyError)} holds no value.");
    }

    private static Task<GetStorageByKeyError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Storage400Error1>().As(AsStorage400Error1),
            401 => response.Json<object>().As(AsAnonymousObject),
            403 => response.Json<Storage403Error1>().As(AsStorage403Error1),
            404 => response.Json<Storage404Error1>().As(AsStorage404Error1),
            503 => response.Json<Storage503Error1>().As(AsStorage503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetStorageByKeyError> Response { get; } = new(Create);
}
