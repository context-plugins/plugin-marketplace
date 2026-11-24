using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Authentication;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Statements;

namespace Basiq.Api;

public sealed class Statements
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Statements(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a statement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UsersStatementsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStatementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new statement by uploading an official PDF bank statement or CSV file. The server will create a job that processes the following steps:
    /// 1. <b>verify-credentials</b>: Verify the file, validate the layout, and attempt to parse the statement.
    /// 2. <b>retrieve-accounts</b>: Retrieve the list of accounts and their details (account number, name, balances).
    /// 3. <b>retrieve-transactions</b>: Fetch the transactions for each account.
    /// <para>
    /// The status of each step can be checked by querying the Retrieve a job.
    /// </para>
    /// <para>
    /// &gt; Note that this function is not supported in sandbox environments (AU00000).
    /// </para>
    /// <para>
    /// For CSV file format specifications, please contact our support team.
    /// </para>
    /// <para>
    /// &gt; 🚧
    /// &gt;
    /// &gt; Note that the time it takes to complete the processes above will vary depending on the volume of data along with the complexity of the bank statement. As a rough guide this entire process could take anywhere between 10 - 30 secs. Upload multiple statements in parallel to provide the best user experience
    /// </para>
    /// </remarks>
    public Task<UsersStatementsResponse> CreateStatement(CreateStatementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{userId}/statements"),
            [new TemplateParam("userId", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("institutionId", request.InstitutionId),
                new MultipartParam("statement", request.Statement)),
            JsonResponse.Create<UsersStatementsResponse>(),
            CreateStatementError.Response,
            AuthScheme.Any(_auth.ApiKey, _auth.ServicesToken),
            requestOptions,
            cancellationToken);
}
