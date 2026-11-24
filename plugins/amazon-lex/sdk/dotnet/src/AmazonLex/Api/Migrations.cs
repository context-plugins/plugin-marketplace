using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonLex.Core;
using AmazonLex.Core.Exceptions;
using AmazonLex.Core.Models;
using AmazonLex.Core.Request;
using AmazonLex.Core.Response;
using AmazonLex.Errors;
using AmazonLex.Models;
using AmazonLex.Requests.Migrations;

namespace AmazonLex.Api;

public sealed class Migrations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Migrations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Migration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMigrationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMigrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.
    /// </remarks>
    public Task<GetMigrationResponse> GetMigration(GetMigrationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/migrations/{migrationId}"),
            [new TemplateParam("migrationId", request.MigrationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMigrationResponse>(),
            GetMigrationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Migrations
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMigrationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMigrationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.
    /// </remarks>
    public Task<GetMigrationsResponse> GetMigrations(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/migrations"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMigrationsResponse>(),
            GetMigrationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Migration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartMigrationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartMigrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when you want to take advantage of the new features of Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex developer guide.
    /// </remarks>
    public Task<StartMigrationResponse> StartMigration(StartMigrationOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/migrations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartMigrationResponse>(),
            StartMigrationError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
