using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace AmazonVpc.Core.Hooks;

public abstract class SdkHook
{
    public virtual ValueTask BeforeRequest(HttpRequestMessage request, HookContext context,
        CancellationToken cancellationToken) => default;

    public virtual ValueTask AfterResponse(HttpResponseMessage response, HookContext context,
        CancellationToken cancellationToken) => default;

    public static SdkHook OnRequest(Action<HttpRequestMessage, HookContext> hook) =>
        new DelegateHook((request, context, _) =>
        {
            hook(request, context);
            return default;
        }, null);

    public static SdkHook OnRequest(Func<HttpRequestMessage, HookContext, CancellationToken, ValueTask> hook) =>
        new DelegateHook(hook, null);

    public static SdkHook OnResponse(Action<HttpResponseMessage, HookContext> hook) =>
        new DelegateHook(null, (response, context, _) =>
        {
            hook(response, context);
            return default;
        });

    public static SdkHook OnResponse(Func<HttpResponseMessage, HookContext, CancellationToken, ValueTask> hook) =>
        new DelegateHook(null, hook);

    private sealed class DelegateHook : SdkHook
    {
        private readonly Func<HttpRequestMessage, HookContext, CancellationToken, ValueTask>? _onRequest;
        private readonly Func<HttpResponseMessage, HookContext, CancellationToken, ValueTask>? _onResponse;

        public DelegateHook(
            Func<HttpRequestMessage, HookContext, CancellationToken, ValueTask>? onRequest,
            Func<HttpResponseMessage, HookContext, CancellationToken, ValueTask>? onResponse)
        {
            _onRequest = onRequest;
            _onResponse = onResponse;
        }

        public override ValueTask BeforeRequest(HttpRequestMessage request, HookContext context,
            CancellationToken cancellationToken) =>
            _onRequest?.Invoke(request, context, cancellationToken) ?? default;

        public override ValueTask AfterResponse(HttpResponseMessage response, HookContext context,
            CancellationToken cancellationToken) =>
            _onResponse?.Invoke(response, context, cancellationToken) ?? default;
    }
}

public sealed record HookContext
{
    public required HttpMethod Method { get; init; }

    public required Uri Uri { get; init; }

    public RequestOptions? RequestOptions { get; init; }
}

internal static class SdkHookExtensions
{
    extension(IEnumerable<SdkHook> hooks)
    {
        public async ValueTask BeforeRequest(HttpRequestMessage request, HookContext context,
            CancellationToken cancellationToken)
        {
            foreach (var hook in hooks)
                await hook.BeforeRequest(request, context, cancellationToken).ConfigureAwait(false);
        }

        public async ValueTask AfterResponse(HttpResponseMessage response, HookContext context,
            CancellationToken cancellationToken)
        {
            foreach (var hook in hooks)
                await hook.AfterResponse(response, context, cancellationToken).ConfigureAwait(false);
        }
    }
}
