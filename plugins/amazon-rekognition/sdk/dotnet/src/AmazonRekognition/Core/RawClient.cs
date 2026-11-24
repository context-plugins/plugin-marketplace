using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Net.Http;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using Polly;
using Polly.Timeout;
using AmazonRekognition.Core.Authentication;
using AmazonRekognition.Core.ErrorResponse;
using AmazonRekognition.Core.Exceptions;
using AmazonRekognition.Core.Extensions;
using AmazonRekognition.Core.Hooks;
using AmazonRekognition.Core.Logging;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Core.Pagination;
using AmazonRekognition.Core.Pagination.States;
using AmazonRekognition.Core.Request;
using AmazonRekognition.Core.Response;

namespace AmazonRekognition.Core;

internal sealed class RawClient
{
    private delegate Task<ApiResult<TResponse, TError>> ApiCallHandler<TResponse, TError>(
        ApiRequest request,
        ApiResponse<TResponse, TError> response,
        CancellationToken cancellationToken);

    private readonly HeadersFactory _headerFactory;
    private readonly HttpClient _httpClient;
    private readonly HttpStatusPolicy _statusPolicy;
    private readonly UriFactory _uriFactory;
    private readonly ResiliencePipelineFactory _resiliencePipelineFactory;
    private readonly HttpLogger _httpLogger;
    private readonly IReadOnlyList<SdkHook> _hooks;
    private readonly ResponseContextFactory _responseContexts;

    public RawClient(HttpClient httpClient, UriFactory uriFactory,
        HttpStatusPolicy statusPolicy, HeadersFactory headerFactory,
        ResiliencePipelineFactory resiliencePipelineFactory, HttpLogger httpLogger,
        IReadOnlyList<SdkHook> hooks, ResponseContextFactory responseContexts)
    {
        _httpClient = httpClient;
        _uriFactory = uriFactory;
        _statusPolicy = statusPolicy;
        _headerFactory = headerFactory;
        _resiliencePipelineFactory = resiliencePipelineFactory;
        _httpLogger = httpLogger;
        _hooks = hooks;
        _responseContexts = responseContexts;
    }

    public Task<ApiResult<TResponse, TError>> ExecuteResult<TResponse, TError>(
        UrlTemplate urlTemplate,
        IReadOnlyCollection<TemplateParam> templateParameters,
        IReadOnlyCollection<Param> queryParameters,
        IReadOnlyCollection<HeaderParam> headerParameters,
        HttpMethod httpMethod,
        IRequest request,
        IResponse<TResponse> response,
        IErrorResponse<TError> errorResponseDeserializer,
        IAuthScheme auth,
        RequestOptions? requestOptions,
        CancellationToken cancellationToken) =>
        ExecuteResult(
            new ApiRequest(
                urlTemplate,
                templateParameters,
                queryParameters,
                headerParameters,
                httpMethod,
                request,
                auth),
            ApiResponse.Create(response, errorResponseDeserializer),
            requestOptions,
            cancellationToken);

    public async Task<TResponse> Execute<TResponse, TError>(
        UrlTemplate urlTemplate,
        IReadOnlyCollection<TemplateParam> templateParameters,
        IReadOnlyCollection<Param> queryParameters,
        IReadOnlyCollection<HeaderParam> headerParameters,
        HttpMethod httpMethod,
        IRequest request,
        IResponse<TResponse> response,
        IErrorResponse<TError> errorResponseDeserializer,
        IAuthScheme auth,
        RequestOptions? requestOptions,
        CancellationToken cancellationToken) =>
        (await ExecuteResult(
            urlTemplate,
            templateParameters,
            queryParameters,
            headerParameters,
            httpMethod,
            request,
            response,
            errorResponseDeserializer,
            auth,
            requestOptions,
            cancellationToken).ConfigureAwait(false)).GetResponseOrThrow();

    public Pageable<TResponse, TItem> ExecutePaged<TResponse, TState, TItem, TError>(
        TState initialState,
        Func<TState, ApiRequest> requestFactory,
        Func<TResponse, IReadOnlyList<TItem>?> itemsSelector,
        ApiResponse<TResponse, TError> response,
        RequestOptions? requestOptions,
        CancellationToken cancellationToken)
        where TState : IPageState<TResponse, TState>
    {
        var pages = ExecutePagedResult(initialState, requestFactory, itemsSelector, response,
            requestOptions, cancellationToken);
        return new Pageable<TResponse, TItem>(ThrowOnError(pages.AsPages(cancellationToken), cancellationToken), itemsSelector);

        static async IAsyncEnumerable<TResponse> ThrowOnError(
            IAsyncEnumerable<ApiResult<TResponse, TError>> pages,
            [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            await foreach (var result in pages.WithCancellation(cancellationToken).ConfigureAwait(false))
                yield return result.GetResponseOrThrow();
        }
    }

    public Pageable<ApiResult<TResponse, TError>, TItem> ExecutePagedResult<TResponse, TState, TItem, TError>(
        TState initialState,
        Func<TState, ApiRequest> requestFactory,
        Func<TResponse, IReadOnlyList<TItem>?> itemsSelector,
        ApiResponse<TResponse, TError> response,
        RequestOptions? requestOptions,
        CancellationToken cancellationToken)
        where TState : IPageState<TResponse, TState>
    {
        var pages = Paginate(initialState, requestFactory, itemsSelector, response,
            (req, resp, ct) => ExecuteResult(req, resp, requestOptions, ct), cancellationToken);

        return new Pageable<ApiResult<TResponse, TError>, TItem>(pages, apiResult =>
            apiResult.TryGetResponse(out var page) ? itemsSelector(page) : null);

        static async IAsyncEnumerable<ApiResult<TResponse, TError>> Paginate(
            TState initialState,
            Func<TState, ApiRequest> requestFactory,
            Func<TResponse, IReadOnlyList<TItem>?> itemsSelector,
            ApiResponse<TResponse, TError> response,
            ApiCallHandler<TResponse, TError> execute,
            [EnumeratorCancellation] CancellationToken cancellationToken)
        {
            var state = initialState;

            while (true)
            {
                var result = await execute(requestFactory(state), response, cancellationToken)
                    .ConfigureAwait(false);

                yield return result;

                if (!result.TryGetResponse(out var page))
                    yield break;

                var next = state.Next(page, result.Headers, itemsSelector(page)?.Count ?? 0);
                if (next is null)
                    yield break;

                state = next;
            }
        }
    }

    private async Task<ApiResult<TResponse, TError>> ExecuteResult<TResponse, TError>(
        ApiRequest request,
        ApiResponse<TResponse, TError> response,
        RequestOptions? requestOptions,
        CancellationToken cancellationToken)
    {
        var uri = _uriFactory.Create(request.UrlTemplate, request.QueryParameters, request.TemplateParameters);
        var headers = _headerFactory.Create(request.HeaderParameters, requestOptions?.Headers ?? []);

        var log = _httpLogger.Begin(request.HttpMethod, uri, requestOptions);
        var pipeline = _resiliencePipelineFactory.Create(request.Request);

        var context = ResilienceContextPool.Shared.Get(cancellationToken);
        context.Properties.Set(ResiliencePipelineFactory.AuthKey, request.Auth);
        context.Properties.Set(ResiliencePipelineFactory.LogScopeKey, log);
        context.Properties.Set(ResiliencePipelineFactory.MethodKey, request.HttpMethod);

        var hooks = requestOptions?.Hooks is { Count: > 0 } perCallHooks
            ? [.. _hooks, .. perCallHooks]
            : _hooks;
        var hookContext = new HookContext { Method = request.HttpMethod, Uri = uri, RequestOptions = requestOptions };
        var callContext = CallContext.For(request.HttpMethod, uri);

        // The response is not disposed of here: on success its lifetime is owned by IResponse.Map
        // (buffered responses dispose it immediately, streaming ones hand it to their iterator);
        // the error path below owns disposal explicitly.
        HttpResponseMessage httpResponseMessage;
        try
        {
            httpResponseMessage = await pipeline.ExecuteAsync(async ctx =>
            {
                // Dispose only the content: HttpRequestMessage.Dispose does nothing more.
                var httpRequest = new HttpRequestMessage(request.HttpMethod, uri);
                try
                {
                    httpRequest.Content = request.Request.Get();
                    httpRequest.Headers.AddRange(headers);
                    AuthOutcome outcome;
                    try
                    {
                        outcome = await request.Auth.Apply(httpRequest, ctx.CancellationToken).ConfigureAwait(false);
                    }
                    catch (OperationCanceledException) when (ctx.CancellationToken.IsCancellationRequested)
                    {
                        throw;
                    }
                    catch (Exception ex) when (ex is not AuthSchemeException)
                    {
                        throw AuthSchemeException.Faulted(callContext, ex);
                    }

                    if (outcome.TryGetUnsatisfied(out var unsatisfied))
                        throw AuthSchemeException.Unsatisfied(callContext, unsatisfied);

                    await hooks.BeforeRequest(httpRequest, hookContext, ctx.CancellationToken).ConfigureAwait(false);

                    await log.RequestSending(httpRequest).ConfigureAwait(false);

                    HttpResponseMessage httpResponse;
                    try
                    {
                        httpResponse = await _httpClient
                            .SendAsync(httpRequest, HttpCompletionOption.ResponseHeadersRead, ctx.CancellationToken)
                            .ConfigureAwait(false);
                    }
                    catch (TaskCanceledException ex) when (!ctx.CancellationToken.IsCancellationRequested && _httpClient.Timeout != Timeout.InfiniteTimeSpan)
                    {
                        throw SdkTimeoutException.For(callContext, _httpClient.Timeout,
                            $"{callContext} received no response within {_httpClient.Timeout.TotalSeconds.ToString(CultureInfo.InvariantCulture)} s.", ex);
                    }

                    try
                    {
                        log.ResponseReceived(httpResponse, _statusPolicy.IsSuccess(httpResponse.StatusCode));
                        if (_statusPolicy.IsUnauthorized(httpResponse.StatusCode) && request.Auth is IRevocableAuthScheme revocable)
                            await revocable.Invalidate(httpRequest, ctx.CancellationToken).ConfigureAwait(false);

                        await hooks.AfterResponse(httpResponse, hookContext, ctx.CancellationToken).ConfigureAwait(false);

                        return httpResponse;
                    }
                    catch
                    {
                        httpResponse.Dispose();
                        throw;
                    }
                }
                finally
                {
                    httpRequest.Content?.Dispose();
                }
            }, context).ConfigureAwait(false);
        }
        catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested)
        {
            throw;
        }
        catch (TimeoutRejectedException ex)
        {
            log.Failed(ex);
            throw SdkTimeoutException.For(callContext, ex.Timeout,
                $"{callContext} received no response within {ex.Timeout.TotalSeconds.ToString(CultureInfo.InvariantCulture)} s.", ex);
        }
        catch (HttpRequestException ex)
        {
            log.Failed(ex);
            throw new SdkConnectionException($"{callContext} could not be sent: {ex.Message}", ex)
            {
                Method = callContext.Method,
                RequestUri = callContext.RequestUri,
            };
        }
        catch (Exception ex)
        {
            log.Failed(ex is SdkException { InnerException: { } cause } ? cause : ex);
            throw;
        }
        finally
        {
            ResilienceContextPool.Shared.Return(context);
        }

        // Capture before IResponse.Map runs — buffered responses dispose the message inside Map.
        var statusCode = httpResponseMessage.StatusCode;
        var responseHeaders = httpResponseMessage.Headers;
        var contentType = httpResponseMessage.Content?.Headers.ContentType;
        var responseContext = _responseContexts.Create(httpResponseMessage, callContext);

        try
        {
            if (_statusPolicy.IsSuccess(statusCode))
            {
                var successResponse =
                    await response.Response.Map(responseContext, cancellationToken).ConfigureAwait(false);
                return ApiResult<TResponse, TError>.Success(callContext, successResponse, statusCode, responseHeaders, contentType);
            }

            using (httpResponseMessage)
            {
                var errorResponse = await response.ErrorResponseDeserializer.Map(responseContext, cancellationToken)
                    .ConfigureAwait(false);

                return ApiResult<TResponse, TError>.Failure(callContext, errorResponse, statusCode, responseHeaders, contentType);
            }
        }
        catch (Exception ex) when (ex is HttpRequestException or IOException)
        {
            log.Failed(ex);
            throw new SdkConnectionException($"{callContext} could not read the response body: {ex.Message}", ex)
            {
                Method = callContext.Method,
                RequestUri = callContext.RequestUri,
            };
        }
    }
}
