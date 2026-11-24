using System.Net.Http.Headers;

namespace AmazonVpc.Core.Pagination.States;

internal interface IPageState<in TResponse, out TState>
{
    TState? Next(TResponse page, HttpResponseHeaders headers, int itemCount);
}
