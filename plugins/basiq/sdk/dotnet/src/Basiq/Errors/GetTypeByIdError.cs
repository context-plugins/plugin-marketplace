using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetTypeByIdError : ApiError
{
    private readonly Optional<Events400Error21> _events400Error21Value;

    private readonly Optional<Events401Error21> _events401Error21Value;

    private readonly Optional<Events403Error21> _events403Error21Value;

    private readonly Optional<Events404Error21> _events404Error21Value;

    private readonly Optional<Events429Error1> _events429Error1Value;

    private readonly Optional<Events500Error21> _events500Error21Value;

    private readonly Optional<Events503Error21> _events503Error21Value;

    private GetTypeByIdError(Optional<Events400Error21> events400Error21Value,
        Optional<Events401Error21> events401Error21Value,
        Optional<Events403Error21> events403Error21Value,
        Optional<Events404Error21> events404Error21Value,
        Optional<Events429Error1> events429Error1Value,
        Optional<Events500Error21> events500Error21Value,
        Optional<Events503Error21> events503Error21Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _events400Error21Value = events400Error21Value;
        _events401Error21Value = events401Error21Value;
        _events403Error21Value = events403Error21Value;
        _events404Error21Value = events404Error21Value;
        _events429Error1Value = events429Error1Value;
        _events500Error21Value = events500Error21Value;
        _events503Error21Value = events503Error21Value;
    }

    private static GetTypeByIdError AsEvents400Error21(Events400Error21 value) =>
        new(Optional<Events400Error21>.Some(value), default, default, default, default, default, default, default);

    private static GetTypeByIdError AsEvents401Error21(Events401Error21 value) =>
        new(default, Optional<Events401Error21>.Some(value), default, default, default, default, default, default);

    private static GetTypeByIdError AsEvents403Error21(Events403Error21 value) =>
        new(default, default, Optional<Events403Error21>.Some(value), default, default, default, default, default);

    private static GetTypeByIdError AsEvents404Error21(Events404Error21 value) =>
        new(default, default, default, Optional<Events404Error21>.Some(value), default, default, default, default);

    private static GetTypeByIdError AsEvents429Error1(Events429Error1 value) =>
        new(default, default, default, default, Optional<Events429Error1>.Some(value), default, default, default);

    private static GetTypeByIdError AsEvents500Error21(Events500Error21 value) =>
        new(default, default, default, default, default, Optional<Events500Error21>.Some(value), default, default);

    private static GetTypeByIdError AsEvents503Error21(Events503Error21 value) =>
        new(default, default, default, default, default, default, Optional<Events503Error21>.Some(value), default);

    private static GetTypeByIdError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetEvents400Error21([NotNullWhen(true)] out Events400Error21? value) =>
        _events400Error21Value.TryGetValue(out value);

    public bool TryGetEvents401Error21([NotNullWhen(true)] out Events401Error21? value) =>
        _events401Error21Value.TryGetValue(out value);

    public bool TryGetEvents403Error21([NotNullWhen(true)] out Events403Error21? value) =>
        _events403Error21Value.TryGetValue(out value);

    public bool TryGetEvents404Error21([NotNullWhen(true)] out Events404Error21? value) =>
        _events404Error21Value.TryGetValue(out value);

    public bool TryGetEvents429Error1([NotNullWhen(true)] out Events429Error1? value) =>
        _events429Error1Value.TryGetValue(out value);

    public bool TryGetEvents500Error21([NotNullWhen(true)] out Events500Error21? value) =>
        _events500Error21Value.TryGetValue(out value);

    public bool TryGetEvents503Error21([NotNullWhen(true)] out Events503Error21? value) =>
        _events503Error21Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Events400Error21, TResult> onEvents400Error21,
        Func<Events401Error21, TResult> onEvents401Error21,
        Func<Events403Error21, TResult> onEvents403Error21,
        Func<Events404Error21, TResult> onEvents404Error21,
        Func<Events429Error1, TResult> onEvents429Error1,
        Func<Events500Error21, TResult> onEvents500Error21,
        Func<Events503Error21, TResult> onEvents503Error21,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEvents400Error21(out var events400Error21Value) => onEvents400Error21(events400Error21Value),
            _ when TryGetEvents401Error21(out var events401Error21Value) => onEvents401Error21(events401Error21Value),
            _ when TryGetEvents403Error21(out var events403Error21Value) => onEvents403Error21(events403Error21Value),
            _ when TryGetEvents404Error21(out var events404Error21Value) => onEvents404Error21(events404Error21Value),
            _ when TryGetEvents429Error1(out var events429Error1Value) => onEvents429Error1(events429Error1Value),
            _ when TryGetEvents500Error21(out var events500Error21Value) => onEvents500Error21(events500Error21Value),
            _ when TryGetEvents503Error21(out var events503Error21Value) => onEvents503Error21(events503Error21Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetTypeByIdError)} holds no value.")
        };

    public void Match(Action<Events400Error21> onEvents400Error21,
        Action<Events401Error21> onEvents401Error21,
        Action<Events403Error21> onEvents403Error21,
        Action<Events404Error21> onEvents404Error21,
        Action<Events429Error1> onEvents429Error1,
        Action<Events500Error21> onEvents500Error21,
        Action<Events503Error21> onEvents503Error21,
        Action<RawError> otherwise)
    {
        if (TryGetEvents400Error21(out var events400Error21Value)) onEvents400Error21(events400Error21Value);
        else if (TryGetEvents401Error21(out var events401Error21Value)) onEvents401Error21(events401Error21Value);
        else if (TryGetEvents403Error21(out var events403Error21Value)) onEvents403Error21(events403Error21Value);
        else if (TryGetEvents404Error21(out var events404Error21Value)) onEvents404Error21(events404Error21Value);
        else if (TryGetEvents429Error1(out var events429Error1Value)) onEvents429Error1(events429Error1Value);
        else if (TryGetEvents500Error21(out var events500Error21Value)) onEvents500Error21(events500Error21Value);
        else if (TryGetEvents503Error21(out var events503Error21Value)) onEvents503Error21(events503Error21Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetTypeByIdError)} holds no value.");
    }

    private static Task<GetTypeByIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Events400Error21>().As(AsEvents400Error21),
            401 => response.Json<Events401Error21>().As(AsEvents401Error21),
            403 => response.Json<Events403Error21>().As(AsEvents403Error21),
            404 => response.Json<Events404Error21>().As(AsEvents404Error21),
            429 => response.Json<Events429Error1>().As(AsEvents429Error1),
            500 => response.Json<Events500Error21>().As(AsEvents500Error21),
            503 => response.Json<Events503Error21>().As(AsEvents503Error21),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetTypeByIdError> Response { get; } = new(Create);
}
