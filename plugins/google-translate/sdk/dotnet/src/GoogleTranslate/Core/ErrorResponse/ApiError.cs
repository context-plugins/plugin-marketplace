using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading;
using System.Threading.Tasks;
using GoogleTranslate.Core.Models;
using GoogleTranslate.Core.Response;

namespace GoogleTranslate.Core.ErrorResponse;

public abstract class ApiError
{
    private readonly Optional<RawError> _rawError;

    internal ApiError(Optional<RawError> rawError)
    {
        _rawError = rawError;
    }

    public bool TryGetRawError([NotNullWhen(true)] out RawError? error) => _rawError.TryGetValue(out error);
}

internal readonly struct FailedResponse
{
    private readonly ResponseContext _context;
    private readonly CancellationToken _cancellationToken;

    public FailedResponse(ResponseContext context, CancellationToken cancellationToken)
    {
        _context = context;
        _cancellationToken = cancellationToken;
    }

    public int StatusCode => (int)_context.Response.StatusCode;

    public Parse<TBody> Json<TBody>() => new(JsonResponse.Create<TBody>(), this);

    public Parse<TBody> Scalar<TBody>(Func<string, TBody> read) => new(PlainTextResponse.Create(read), this);

    public Parse<RawError> RawBody() => new(RawErrorBodyResponse.Instance, this);

    public Parse<ErrorByteContent> Bytes() => new(ErrorByteResponse.Instance, this);

    public readonly struct Parse<TBody>
    {
        private readonly IResponse<TBody> _parser;
        private readonly FailedResponse _source;

        public Parse(IResponse<TBody> parser, FailedResponse source)
        {
            _parser = parser;
            _source = source;
        }

        public async Task<TSelf> As<TSelf>(Func<TBody, TSelf> wrap) =>
            wrap(await _parser.Map(_source._context, _source._cancellationToken).ConfigureAwait(false));
    }
}

internal sealed class ApiErrorResponse<TError> : IErrorResponse<TError>
    where TError : ApiError
{
    private readonly Func<FailedResponse, Task<TError>> _create;

    public ApiErrorResponse(Func<FailedResponse, Task<TError>> create) => _create = create;

    public Task<TError> Map(ResponseContext context, CancellationToken cancellationToken) =>
        _create(new FailedResponse(context, cancellationToken));
}
