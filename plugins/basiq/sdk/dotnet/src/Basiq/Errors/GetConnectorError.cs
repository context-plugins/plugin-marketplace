using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetConnectorError : ApiError
{
    private readonly Optional<Connectors400Error1> _connectors400Error1Value;

    private readonly Optional<Connectors401Error1> _connectors401Error1Value;

    private readonly Optional<Connectors404Error1> _connectors404Error1Value;

    private readonly Optional<Connectors500Error1> _connectors500Error1Value;

    private GetConnectorError(Optional<Connectors400Error1> connectors400Error1Value,
        Optional<Connectors401Error1> connectors401Error1Value,
        Optional<Connectors404Error1> connectors404Error1Value,
        Optional<Connectors500Error1> connectors500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _connectors400Error1Value = connectors400Error1Value;
        _connectors401Error1Value = connectors401Error1Value;
        _connectors404Error1Value = connectors404Error1Value;
        _connectors500Error1Value = connectors500Error1Value;
    }

    private static GetConnectorError AsConnectors400Error1(Connectors400Error1 value) =>
        new(Optional<Connectors400Error1>.Some(value), default, default, default, default);

    private static GetConnectorError AsConnectors401Error1(Connectors401Error1 value) =>
        new(default, Optional<Connectors401Error1>.Some(value), default, default, default);

    private static GetConnectorError AsConnectors404Error1(Connectors404Error1 value) =>
        new(default, default, Optional<Connectors404Error1>.Some(value), default, default);

    private static GetConnectorError AsConnectors500Error1(Connectors500Error1 value) =>
        new(default, default, default, Optional<Connectors500Error1>.Some(value), default);

    private static GetConnectorError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetConnectors400Error1([NotNullWhen(true)] out Connectors400Error1? value) =>
        _connectors400Error1Value.TryGetValue(out value);

    public bool TryGetConnectors401Error1([NotNullWhen(true)] out Connectors401Error1? value) =>
        _connectors401Error1Value.TryGetValue(out value);

    public bool TryGetConnectors404Error1([NotNullWhen(true)] out Connectors404Error1? value) =>
        _connectors404Error1Value.TryGetValue(out value);

    public bool TryGetConnectors500Error1([NotNullWhen(true)] out Connectors500Error1? value) =>
        _connectors500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Connectors400Error1, TResult> onConnectors400Error1,
        Func<Connectors401Error1, TResult> onConnectors401Error1,
        Func<Connectors404Error1, TResult> onConnectors404Error1,
        Func<Connectors500Error1, TResult> onConnectors500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetConnectors400Error1(out var connectors400Error1Value) => onConnectors400Error1(
                connectors400Error1Value),
            _ when TryGetConnectors401Error1(out var connectors401Error1Value) => onConnectors401Error1(
                connectors401Error1Value),
            _ when TryGetConnectors404Error1(out var connectors404Error1Value) => onConnectors404Error1(
                connectors404Error1Value),
            _ when TryGetConnectors500Error1(out var connectors500Error1Value) => onConnectors500Error1(
                connectors500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetConnectorError)} holds no value.")
        };

    public void Match(Action<Connectors400Error1> onConnectors400Error1,
        Action<Connectors401Error1> onConnectors401Error1,
        Action<Connectors404Error1> onConnectors404Error1,
        Action<Connectors500Error1> onConnectors500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetConnectors400Error1(out var connectors400Error1Value)) onConnectors400Error1(
            connectors400Error1Value);
        else if (TryGetConnectors401Error1(out var connectors401Error1Value)) onConnectors401Error1(
            connectors401Error1Value);
        else if (TryGetConnectors404Error1(out var connectors404Error1Value)) onConnectors404Error1(
            connectors404Error1Value);
        else if (TryGetConnectors500Error1(out var connectors500Error1Value)) onConnectors500Error1(
            connectors500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetConnectorError)} holds no value.");
    }

    private static Task<GetConnectorError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<Connectors400Error1>().As(AsConnectors400Error1),
            401 => response.Json<Connectors401Error1>().As(AsConnectors401Error1),
            404 => response.Json<Connectors404Error1>().As(AsConnectors404Error1),
            500 => response.Json<Connectors500Error1>().As(AsConnectors500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetConnectorError> Response { get; } = new(Create);
}
