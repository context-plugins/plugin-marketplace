using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Authentication;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Requests.Access;

namespace Skribble.Api;

/// <summary>
/// Endpoints for authentication, authorization, and user access management.
/// </summary>
public sealed class Access
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Access(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Authenticate and Obtain an Access Token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AccessLoginError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To use the Skribble API, you first need an API key and an API user. Both
    /// can be managed on the API key page in your business profile. Consult our
    /// guide for
    /// setup instructions.
    /// <para>
    /// Skribble offers two types of API keys:
    /// </para>
    /// <para>
    /// <b>Demo API keys</b>
    /// </para>
    /// <para>
    /// Demo API keys are for testing and development purposes. Signatures created
    /// with demo keys have no legal weight and are free of charge.
    /// </para>
    /// <para>
    /// Demo keys can be identified by their name, which starts with <b>api_demo</b>.
    /// </para>
    /// <para>
    /// <b>Production API keys</b>
    /// </para>
    /// <para>
    /// Production API keys are used for live systems. Signatures created with
    /// production keys will be invoiced.
    /// </para>
    /// <para>
    /// Production keys can be identified by their name, which starts with
    /// <b>api_production</b> or, in some cases, <b>api_prod</b>.
    /// </para>
    /// <para>
    /// &gt; <b>⚠ Note</b>
    /// &gt; All costs incurred by signature requests created with your API keys will
    /// &gt; be <b>charged to your business</b>. We recommend starting with a demo API
    /// &gt; key during development and testing, and switching to a production key
    /// &gt; only once testing is complete.
    /// </para>
    /// <para>
    /// For help setting up Skribble Business, contact us at
    /// support@skribble.com.
    /// </para>
    /// <para>
    /// To obtain an access token, authenticate using the <c>/access/login</c> endpoint.
    /// You can pass your credentials as raw JSON or as <c>x-www-form-urlencoded</c>
    /// key-value pairs (see example requests).
    /// </para>
    /// <para>
    /// Upon successful authentication, a JSON Web Token (JWT) is returned. This
    /// JWT must be included in nearly every API request.
    /// </para>
    /// <para>
    /// The access token is passed in the <c>Authorization</c> HTTP header using the
    /// <c>Bearer</c> scheme. Example:
    /// <c>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI...</c>
    /// </para>
    /// <para>
    /// ### Token life cycle
    /// </para>
    /// <para>
    /// #### API key
    /// </para>
    /// <para>
    /// API keys have a long but finite lifetime. The validity period depends on
    /// the volume of API calls and is agreed upon individually as part of the
    /// shared secret agreement.
    /// </para>
    /// <para>
    /// #### Access token
    /// </para>
    /// <para>
    /// Access tokens have a lifetime of approximately <b>20 minutes</b>. Automatic
    /// token renewal is not currently supported.
    /// </para>
    /// <para>
    /// #### Logout
    /// </para>
    /// <para>
    /// There is <b>no logout endpoint</b>. Access tokens expire automatically after
    /// the defined lifetime.
    /// </para>
    /// </remarks>
    public Task<string> AccessLogin(AccessLoginRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/access/login"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormUrlEncodedRequest.Create(new Param("username", request.Username), new Param("api-key", request.ApiKey)),
            PlainTextResponse.CreateString(),
            AccessLoginError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
