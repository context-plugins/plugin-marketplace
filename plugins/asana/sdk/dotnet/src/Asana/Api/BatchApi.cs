using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.BatchApi;

namespace Asana.Api;

/// <summary>
/// There are many cases where you want to accomplish a variety of work in the Asana API but want to minimize the number of HTTP requests you make. For example:
/// <para>
/// * Modern browsers limit the number of requests that a single web page can
/// make at once.
/// * Mobile apps will use more battery life to keep the cellular radio on
/// when making a series of requests.
/// * There is an overhead cost to developing software that can make multiple
/// requests in parallel.
/// * Some cloud platforms handle parallelism poorly, or disallow it
/// entirely.
/// </para>
/// <para>
/// To make development easier in these use cases, Asana provides a <b>batch API</b> that enables developers to perform multiple “actions” by making only a single HTTP request.
/// </para>
/// <para>
/// #### Making a batch request
/// </para>
/// <para>
/// To make a batch request, send a <c>POST</c> request to <c>/batch</c>. Like other <c>POST</c> endpoints, the body should contain a <c>data</c> envelope. Inside this envelope should be a single <c>actions</c> field, containing a list of “action” objects. Each action represents a standard request to an existing endpoint in the Asana API.
/// </para>
/// <para>
/// <b>The maximum number of actions allowed in a single batch request is 10</b>. Making a batch request with no actions in it will result in a <c>400 Bad Request</c>.
/// </para>
/// <para>
/// When the batch API receives the list of actions to execute, it will dispatch those actions to the already-implemented endpoints specified by the <c>relative_path</c> and <c>method</c> for each action. This happens in parallel, so all actions in the request will be processed simultaneously. There is no guarantee of the execution order for these actions, nor is there a way to use the output of one action as the input of another action (such as creating a task and then commenting on it).
/// </para>
/// <para>
/// The response to the batch request will contain (within the <c>data</c> envelope) a list of result objects, one for each action. The results are guaranteed to be in the same order as the actions in the request (e.g., the first result in the response corresponds to the first action in the request)
/// </para>
/// <para>
/// The batch API will always attempt to return a <c>200 Success</c> response with individual result objects for each individual action in the request. Only in certain cases (such as missing authorization or malformed JSON in the body) will the entire request fail with another status code. Even if every individual action in the request fails, the batch API will still return a <c>200 Success</c> response, and each result object in the response will contain the errors encountered with each action.
/// </para>
/// <para>
/// #### Rate limiting
/// </para>
/// <para>
/// The batch API fully respects all of our rate limiting. This means that a batch request counts against *both* the standard rate limiter and the concurrent request limiter as though you had made a separate HTTP request for every individual action. For example, a batch request with five actions counts as five separate requests in the standard rate limiter, and counts as five concurrent requests in the concurrent request limiter. The batch request itself incurs no cost.
/// </para>
/// <para>
/// If any of the actions in a batch request would exceed any of the enforced limits, the *entire* request will fail with a <c>429 Too Many Requests</c> error. This is to prevent the unpredictability of which actions might succeed if not all of them could succeed.
/// </para>
/// <para>
/// #### Restrictions
/// </para>
/// <para>
/// Not every endpoint can be accessed through the batch API. Specifically, the following actions cannot be taken and will result in a <c>400 Bad Request</c> for that action:
/// </para>
/// <list type="bullet">
///   <item><description>Uploading attachments</description></item>
///   <item><description>Creating, getting, or deleting organization exports</description></item>
///   <item><description>Any SCIM operations</description></item>
///   <item><description>Nested calls to the batch API</description></item>
/// </list>
/// </summary>
public sealed class BatchApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BatchApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Submit parallel requests
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBatchRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Make multiple requests in parallel to Asana's API.
    /// </remarks>
    public Task<BatchResponse1> CreateBatchRequest(CreateBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/batch"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchResponse1>(),
            CreateBatchRequestError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
